const url =
  'https://2oj2z3lfgfo5uhn4i4v7jtgdjm0jerjr.lambda-url.us-east-1.on.aws/';
function validationForm() {
  // $("#contactForm").submit(function (e) {
  //     e.preventDefault();
  // });

  // var form = document.getElementById("contactForm");
  // function handleForm(event) { event.preventDefault(); }
  // form.addEventListener('submit', handleForm);
  // e.preventDefault();
  const name = document.getElementById('inputName').value;
  const email = document.getElementById('inputEmail').value;
  const mobile = document.getElementById('inputPhone').value;
  // var faddress = document.getElementById('inputAddress').value;
  const message = document.getElementById('inputMessage').value;

  console.log('fsdsadname', name);
  console.log('femail', email);

  sendEmail(url, { name, email, mobile, message });

  // if (userName.value.trim() === '') {
  // 	seterror(userName, 'name length require')
  // 	retunval = false;
  // }

  // 	var email = document.forms['myForm']['femail'].value;
  // 	if (name.length < 5) {
  // 		seterror('email', 'email length require')
  // 		retunval = false;
  // 	}

  // 	var phone = document.forms['myForm']['fphone'].value;
  // 	if (phone.length < 5) {
  // 		seterror('phone', 'phone length require')
  // 		retunval = false;
  // 	}
  // 	var address = document.forms['myForm']['faddress'].value;
  // 	if (address.length < 5) {
  // 		seterror('address', 'address length require')
  // 		retunval = false;
  // 	}
  // 	var message = document.forms['myForm']['fmessage'].value;
  // 	if (message.length < 5) {
  // 		seterror('message', 'message length require')
  // 		retunval = false;
  // 	}

  // 	return false;
}

async function sendEmail(url, body) {
  console.log('hi');
  const response = await fetch(url, {
    method: 'POST',
    headers: {
      'Content-Type': 'application/json',
      'Access-Control-Allow-Origin': '*',
      'Access-Control-Allow-Headers': '*',
    },
    body,
  });

  const result = await response.json();
  console.log(result);
}
