let sendmail = function () {
  let naamAfzender = document.getElementById('naamAfzender').value;
  let voornaamAfzender = document.getElementById('voornaamAfzender').value;
  let emailAfzender = document.getElementById('emailAfzender').value;
  let bericht = document.getElementById('berichtAfzender').value;
  let body = `<p>Bericht van: ${voornaamAfzender} ${naamAfzender}</p>
  <p>E-mail adres: ${emailAfzender}</p>
  <p>Inhoud:</p>
  <p>${bericht}</p>

  `;

  Email.send({
    SecureToken: '93e617ac-c146-43c8-85c0-367669df2ca8',
    To: 'nyasha.samyn@gmail.com',
    From: 'stefaan.samyn@gmail.com',
    Subject: 'Aanvraag Flexi Medium',
    Body: body
  }).then((message) => {
    alert('Bedankt!\nWe beantwoorden je zo snel mogelijk.');
    document.getElementById('formulier').reset();
  });
};
