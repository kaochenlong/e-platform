import { Controller } from "stimulus";
import Rails from "@rails/ujs";
// import ax from "http/client";

export default class extends Controller {
  static targets = ["likeBtn", "unlikeBtn"];

  connect() {
    const favorited = this.element.dataset.favorited;
    if (favorited === "true") {
      this.likeBtnTarget.classList.add("hidden");
      this.unlikeBtnTarget.classList.remove("hidden");
    } else {
      this.likeBtnTarget.classList.remove("hidden");
      this.unlikeBtnTarget.classList.add("hidden");
    }
  }

  unlike() {
    const id = this.element.dataset.id;

    Rails.ajax({
      url: `/products/${id}/unlike`,
      type: "DELETE",
      success: ({ status }) => {
        if (status === "removed") {
          this.likeBtnTarget.classList.remove("hidden");
          this.unlikeBtnTarget.classList.add("hidden");
        }
      },
      error: (err) => {
        console.log(err);
      },
    });
  }

  like() {
    const id = this.element.dataset.id;

    Rails.ajax({
      url: `/products/${id}/like`,
      type: "POST",
      success: ({ status }) => {
        console.log(status);
        if (status === "added") {
          this.likeBtnTarget.classList.add("hidden");
          this.unlikeBtnTarget.classList.remove("hidden");
        }
      },
      error: (err) => {
        console.log(err);
      },
    });

    // use AXIOS
    // ax.post(`/products/${id}/like`)
    //   .then((ccc) => {
    //     console.log(ccc.data);
    //   })
    //   .catch((err) => {
    //     console.log(err);
    //   });
  }
}
