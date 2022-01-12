# News Explorer Frontend

The frontend is currently under heavy development and can not yet connect to the backend or communicate with the News API.

## Notes for Testing & Usage

- Any credentials that pass validation can be used to log-in (i.e. valid e-mail & password).
- Any valid input in the sign up form will result in a successful registration message.
- Throwaway e-mails (i.e. addresses associated with known temporary e-mail providers) are _**not**_ considered valid.

## Screenshots
<style>
  figure {
    position: relative;
    z-index: 1;
  }
  figcaption {
    position: absolute;
    z-index: 2;
    bottom: 16px;
    left: 16px;
    padding: .2em .75em;
    border-radius: 10px;
    font-size: 14px;
    color: white;
    background-color: rgba(0, 0, 0, 0.6);
    box-shadow: 0px 5px 15px rgba(14, 26, 57, 0.2);
  }
</style>
<figure>
<img src="./screenshots/dev-s2-main.jpg" alt="main screen">
<figcaption>The main screen.</figcaption>
</figure>
<figure>
<img src="./screenshots/dev-s2-login-valid.jpg" alt="login with valid credentials">
<figcaption>Logging in with valid credentials.</figcaption>
</figure>
<figure>
<img src="./screenshots/dev-s2-login-bad-email.jpg" alt="login with an invalid e-mail">
<figcaption>Logging in with an invalid e-mail.</figcaption>
</figure>
