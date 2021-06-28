import React from "react";
import { useForm } from "react-hook-form";
import emailjs from "emailjs-com";
import { ToastContainer, toast } from "react-toastify";
import "react-toastify/dist/ReactToastify.min.css";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faWhatsapp, faInstagram } from "@fortawesome/free-brands-svg-icons";
import { faPhone, faMailBulk } from "@fortawesome/free-solid-svg-icons";

function Contact() {
  const {
    register,
    formState: { errors },
    handleSubmit,
    reset,
  } = useForm();

  const toastifySuccess = () => {
    toast("Mesajınız bize ulaştı! En kısa sürede size dönüş sağlayacağız.", {
      position: "bottom-right",
      autoClose: 5000,
      hideProgressBar: false,
      closeOnClick: true,
      pauseOnHover: true,
      draggable: false,
      className: "submit-feedback success",
      toastId: "notifyToast",
    });
  };
  const toastifyError = () => {
    toast(
      "Mesajınız gönderilemedi. Daha sonra tekrar deneyin ya da mail adresimize direkt ulaşmayı deneyin.",
      {
        position: "bottom-right",
        autoClose: 5000,
        hideProgressBar: false,
        closeOnClick: true,
        pauseOnHover: true,
        draggable: false,
        className: "submit-feedback error",
        toastId: "notifyToast",
      }
    );
  };
  const onSubmit = async (data) => {
    // Send form email
    try {
      const templateParams = {
        name: data.name,
        email: data.email,
        subject: data.subject,
        message: data.message,
      };

      await emailjs.send(
        "service_c5z9i5m",
        "template_k6nam7t",
        templateParams,
        "user_xB9Qf7kX1ChmxddSmBRip"
      );

      reset();
      toastifySuccess();
    } catch (e) {
      toastifyError();
    }
  };

  return (
    <div className="mainContact">
      <div className="map-responsive">
        <iframe
          src="https://www.google.com/maps/embed/v1/place?key=AIzaSyA3q7hmvxsGPH1O8zOvh634s7V0Zl00J64&q=Moda,Istanbul+Turkey"
          width="750"
          height="250"
          frameBorder="0"
          style={{ border: 0 }}
          allowFullScreen=""
          aria-hidden="false"
          tabIndex="0"
          title="harita"
        ></iframe>
      </div>

      <div className="ContactInfo">
        <div className="contactMessage">İletişim Bilgilerimiz ve Adresimiz</div>
        <div className="col">
          <a href="tel:+90 505 296 12 23" className="btn btn-primary">
            <FontAwesomeIcon icon={faPhone} id="faIcon" />
            0505 296 12 23
          </a>
        </div>
        <div className="col">
          <a href="https://wa.me/905052961223?chat" className="btn btn-primary">
            <FontAwesomeIcon icon={faWhatsapp} id="faIcon" />
            Bize Whatsapp'tan yazın.
          </a>
        </div>
        <div className="col">
          <a
            href="https://www.instagram.com/okamimarlik/"
            className="btn btn-primary"
          >
            <FontAwesomeIcon icon={faInstagram} id="faIcon" />
            Instagram'da bizi takip edin.
          </a>
        </div>
        <div className="col">
          <a href="mailto:info@okamimarlik.com" className="btn btn-primary">
            <FontAwesomeIcon icon={faMailBulk} id="faIcon" />
            info@okamimarlik.com
          </a>
        </div>
      </div>

      <div className="ContactForm">
        <div className="contactMessage">Bize ulaşın</div>
        <form id="contact-form" onSubmit={handleSubmit(onSubmit)} noValidate>
          <div className="row formRow">
            <div className="col">
              <input
                type="text"
                {...register("name", {
                  required: {
                    value: true,
                    message: "İsminizi giriniz.",
                  },
                  maxLength: {
                    value: 30,
                    message: "30 karakterden az girmelisiniz.",
                  },
                })}
                className="form-control formInput"
                placeholder="İsiminiz"
              />
              {errors.name && (
                <span className="errorMessage">{errors.name.message}</span>
              )}
            </div>
          </div>
          <div className="row formRow">
            <div className="col">
              <input
                type="email"
                {...register("email", {
                  required: true,
                  pattern:
                    /^[a-zA-Z0-9.!#$%&’*+/=?^_`{|}~-]+@[a-zA-Z0-9-]+(?:\.[a-zA-Z0-9-]+)*$/,
                })}
                className="form-control formInput"
                placeholder="Email adresiniz"
              ></input>
              {errors.email && (
                <span className="errorMessage">
                  Lütfen mail adresinizi doğru girdiğinizden emin olun!
                </span>
              )}
            </div>
          </div>
          {/* Row 2 of form */}
          <div className="row formRow">
            <div className="col">
              <input
                type="text"
                {...register("subject", {
                  required: {
                    value: true,
                    message: "Konu girmelisiniz.",
                  },
                  maxLength: {
                    value: 75,
                    message: "75 karakteri aşmamalı",
                  },
                })}
                className="form-control formInput"
                placeholder="Konu"
              ></input>
              {errors.subject && (
                <span className="errorMessage">{errors.subject.message}</span>
              )}
            </div>
          </div>
          {/* Row 3 of form */}
          <div className="row formRow">
            <div className="col">
              <textarea
                rows={3}
                {...register("message", {
                  required: true,
                })}
                className="form-control formInput"
                placeholder="Mesajınızı buraya girebilirsiniz."
              ></textarea>
              {errors.message && (
                <span className="errorMessage">
                  Mesaj alanını boş bırakmayın!
                </span>
              )}
            </div>
          </div>
          <button className="btn btn-success" type="submit">
            Gönder
          </button>
        </form>
      </div>
      <ToastContainer />
    </div>
  );
}

export default Contact;
