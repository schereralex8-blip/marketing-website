// Mobile nav toggle
document.addEventListener("DOMContentLoaded", () => {
  const toggle = document.querySelector(".nav-toggle");
  const links = document.querySelector(".nav-links");
  if (toggle && links) {
    toggle.addEventListener("click", () => {
      const open = links.classList.toggle("open");
      toggle.setAttribute("aria-expanded", open);
    });
  }

  // Footer year
  document.querySelectorAll("[data-year]").forEach((el) => (el.textContent = new Date().getFullYear()));

  // Booking form
  const form = document.getElementById("booking-form");
  if (form) {
    const params = new URLSearchParams(location.search);
    const room = params.get("room");
    if (room) {
      const select = form.querySelector("#room");
      const match = [...select.options].find((o) => o.value === room);
      if (match) select.value = room;
    }

    const checkin = form.querySelector("#checkin");
    const checkout = form.querySelector("#checkout");
    const today = new Date().toISOString().split("T")[0];
    checkin.min = today;
    checkout.min = today;
    checkin.addEventListener("change", () => (checkout.min = checkin.value || today));

    form.addEventListener("submit", (e) => {
      e.preventDefault();
      const error = form.querySelector(".form-error");
      error.textContent = "";
      if (!form.checkValidity()) {
        form.reportValidity();
        return;
      }
      if (checkout.value <= checkin.value) {
        error.textContent = "Check-out date needs to be after your check-in date.";
        return;
      }
      const data = new FormData(form);
      const nights = Math.round((new Date(checkout.value) - new Date(checkin.value)) / 86400000);
      const addons = data.getAll("addons");
      const summary = {
        Name: data.get("name"),
        Email: data.get("email"),
        Phone: data.get("phone"),
        Room: form.querySelector("#room").selectedOptions[0].text,
        Dates: `${checkin.value} → ${checkout.value} (${nights} night${nights === 1 ? "" : "s"})`,
        "Add-ons": addons.length ? addons.join(", ") : "None",
      };
      if (nights >= 7) summary.Deal = "Summer Package: 15% off + free breakfast & golf credits!";
      const dl = document.getElementById("confirm-details");
      dl.innerHTML = "";
      Object.entries(summary).forEach(([k, v]) => {
        const dt = document.createElement("dt");
        const dd = document.createElement("dd");
        dt.textContent = k;
        dd.textContent = v;
        dl.append(dt, dd);
      });
      form.hidden = true;
      document.getElementById("confirm").classList.add("show");
      document.getElementById("confirm").scrollIntoView({ behavior: "smooth", block: "center" });
    });

    document.getElementById("book-again")?.addEventListener("click", () => {
      form.reset();
      form.hidden = false;
      document.getElementById("confirm").classList.remove("show");
    });
  }

  // Gallery lightbox
  const lightbox = document.querySelector(".lightbox");
  if (lightbox) {
    const inner = lightbox.querySelector(".lightbox-inner");
    const close = () => lightbox.classList.remove("open");
    document.querySelectorAll(".gallery figure").forEach((fig) => {
      fig.tabIndex = 0;
      const open = () => {
        inner.innerHTML = fig.innerHTML;
        lightbox.classList.add("open");
      };
      fig.addEventListener("click", open);
      fig.addEventListener("keydown", (e) => e.key === "Enter" && open());
    });
    lightbox.addEventListener("click", (e) => {
      if (e.target === lightbox || e.target.classList.contains("lightbox-close")) close();
    });
    document.addEventListener("keydown", (e) => e.key === "Escape" && close());
  }
});
