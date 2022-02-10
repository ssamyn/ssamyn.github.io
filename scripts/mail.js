let sendmail = function () {
  Email.send({
    SecureToken: '93e617ac-c146-43c8-85c0-367669df2ca8',
    To: 'stefaan.samyn@gmail.com',
    From: 'stefaan.samyn@gmail.com',
    Subject: 'Aanvraag Flexi Medium',
    Body: 'Dit is de aanvraag'
  }).then((message) => alert('mail has been sent sucessfully'));
};
