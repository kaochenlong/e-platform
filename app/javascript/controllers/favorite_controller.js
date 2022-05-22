import { Controller } from "stimulus";
import ax from "axios";

export default class extends Controller {
  like() {
    const id = this.element.dataset.id;

    // Promise
    ax.post(`/products/${id}/like`)
      .then((resp) => {
        console.log(resp);
      })
      .catch((err) => {
        console.log(err);
      });
  }
}
