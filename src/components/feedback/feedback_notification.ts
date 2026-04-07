
type Nullable<T> = T | null;

export function initFeedbackForm(): void {
  const form = document.getElementById("feedback-form") as HTMLFormElement | null;
  const successMsg = document.getElementById("success-message") as HTMLElement | null;
  const errorMsg = document.getElementById("error-message") as HTMLElement | null;

  if (!form) {
    return;
  }

  const hideMessages = () => {
    if (successMsg) successMsg.style.display = "none";
    if (errorMsg) errorMsg.style.display = "none";
  };

  const revealMessage = (element: Nullable<HTMLElement>) => {
    if (!element) return;
    element.style.display = "block";
    setTimeout(() => {
      element.style.display = "none";
    }, 5000);
  };

  hideMessages();

  form.addEventListener("submit", (event) => {
    event.preventDefault();
    hideMessages();

    const name = (form.querySelector("#name") as HTMLInputElement | null)?.value || "";
    const email = (form.querySelector("#email") as HTMLInputElement | null)?.value || "";
    const message = (form.querySelector("#message") as HTMLTextAreaElement | null)?.value || "";

    const w = window as any;
    if (typeof w.emailjs === "undefined" || typeof w.emailjs.send !== "function") {
      if (errorMsg) {
        errorMsg.textContent = "Email service unavailable. Please try again later.";
        revealMessage(errorMsg);
      }
      return;
    }

    w.emailjs
      .send("service_iopqhqc", "template_zw0i4e7", { name, email, message })
      .then(() => {
        revealMessage(successMsg);
        form.reset();
      })
      .catch(() => {
        revealMessage(errorMsg);
      });
  });
}

// Auto-init behavior matching previous script usage (keeps previous semantics)
if (typeof window !== "undefined") {
  window.addEventListener("DOMContentLoaded", () => {
    const w = window as any;
    if (typeof w.whenTemplatesReady === "function") {
      w.whenTemplatesReady(initFeedbackForm);
    } else {
      initFeedbackForm();
    }
  });
}
