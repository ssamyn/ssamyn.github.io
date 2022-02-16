let sendmail = function () {
  let naamAfzender = document.getElementById('naamAfzender').value;
  let voornaamAfzender = document.getElementById('voornaamAfzender').value;
  let emailAfzender = document.getElementById('emailAfzender').value;
  let phoneAfzender = document.getElementById('phoneAfzender').value;
  let bericht = document.getElementById('berichtAfzender').value;
  let body = `<p>Bericht van: ${voornaamAfzender} ${naamAfzender}</p>
  <p>E-mail adres: ${emailAfzender}</p>  
  <p>Telefoon: ${phoneAfzender}</p>
  <p>Inhoud:</p>
  <p>${bericht}</p>

  `;
  let a = 'stefhaan.sa';
  let aa = 'nyastha.sam';
  aa = 'flexti.medi';
  let bb = 'yn@gmail.com';
  bb = 'um@outlook.com';
  let b = 'myn@gma';
  let c = 'il.com';
  let d = '93e6-17ac-c1';
  let e = '46-43c8-85c0';
  let f = '6766-9df2ca8';

  Email.send({
    SecureToken:
      d.substring(0, 4) +
      d.substring(5) +
      e +
      '-3' +
      f.substring(0, 4) +
      f.substring(5),
    To: aa.substring(0, 4) + aa.substring(5) + bb,
    From: a.substring(0, 4) + a.substring(5) + b + c,
    Subject: 'Aanvraag Flexi Medium',
    Body: body
  }).then((message) => {
    alert('Bedankt!\nWe beantwoorden je zo snel mogelijk.');
    document.getElementById('formulier').reset();
  });
};
