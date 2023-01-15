var throttle = require('lodash.throttle');

const feedbackForm = document.querySelector('.feedback-form');

const userData = {};

const fillFeedbackForm = () => {
  try {
    const userDataFromLS = JSON.parse(
      localStorage.getItem('feedback-form-state')
    );

    if (userDataFromLS === null) {
      return;
    }

    for (const prop in userDataFromLS) {
      feedbackForm.elements[prop].value = userDataFromLS[prop];
    }
  } catch (err) {
    console.log(err);
  }
};

fillFeedbackForm();

const onFeedbackFormInput = event => {
  const { target } = event;

  const name = target.name;
  const value = target.value;

  userData[name] = value;

  localStorage.setItem('feedback-form-state', JSON.stringify(userData));
};

const onFeedbackFormSubmit = event => {
  event.preventDefault();

  const {
    elements: { email, message },
  } = event.currentTarget;

  if (email.value === '' || message.value === '') {
    return alert('Please fill in all the fields!');
  }

  userData.email = email.value;
  userData.message = message.value;

  console.log(userData);

  Object.keys(userData).forEach(key => {
    delete userData[key];
  });

  feedbackForm.reset();
  localStorage.removeItem('feedback-form-state');
};

feedbackForm.addEventListener('input', throttle(onFeedbackFormInput, 500));
feedbackForm.addEventListener('submit', onFeedbackFormSubmit);
