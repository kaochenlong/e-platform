import { Controller } from "stimulus";
import dropin from "braintree-web-drop-in";

export default class extends Controller {
  createNonceElement(nonce) {
    const el = document.createElement("input");
    el.setAttribute("type", "hidden");
    el.setAttribute("name", "nonce");
    el.setAttribute("value", nonce);

    this.element.appendChild(el);
  }

  connect() {
    const token = this.element.dataset.token;

    const creditCard = document.createElement("div");
    this.element.appendChild(creditCard);

    dropin
      .create({
        container: creditCard,
        authorization: token,
      })
      .then((instance) => {
        this.element.addEventListener("submit", (e) => {
          e.preventDefault();
          instance
            .requestPaymentMethod()
            .then(({ nonce }) => {
              this.createNonceElement(nonce);
              this.element.submit();
            })
            .catch((err) => {
              console.log(err);
            });
        });
      })
      .catch((err) => {
        console.log(err);
      });
  }
}
