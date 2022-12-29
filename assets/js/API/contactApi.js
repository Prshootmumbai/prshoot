const url = 'https://api.mailersend.com/v1/email';
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

  console.log('fname', name);
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
  //   console.log(body);
  //   const response = await fetch(url, {
  //     method: 'POST',
  //     headers: {
  //       'Content-Type': 'application/json',
  //       'Access-Control-Allow-Origin': '*',
  //       'Access-Control-Allow-Headers': '*',
  //       mode: 'no-cors',
  //     },
  //     body: JSON.stringify(body),
  //   });

  //   const result = await response.json();
  //   console.log(result);

  var myHeaders = new Headers();
  myHeaders.append('Content-Type', 'application/json');
  myHeaders.append('X-Requested-With', 'XMLHttpRequest');
  myHeaders.append(
    'Authorization',
    'Bearer eyJ0eXAiOiJKV1QiLCJhbGciOiJSUzI1NiJ9.eyJhdWQiOiIxIiwianRpIjoiNGNmMjNiMGJjODI1YTc4YjA3NGIxYTI5Zjc3OWI0YTEwMTkyNTk2ODRhYjRjMDJhZmZmNTRjMTRhYjA0NTVkYTdiNzc4NzM4YmM4OWY0ZmQiLCJpYXQiOjE2NzIzMzg5MjcuMzQ2NjI1LCJuYmYiOjE2NzIzMzg5MjcuMzQ2NjI3LCJleHAiOjQ4MjgwMTI1MjcuMzQyNzkzLCJzdWIiOiI1MTM4NSIsInNjb3BlcyI6WyJlbWFpbF9mdWxsIiwiZG9tYWluc19mdWxsIiwiYWN0aXZpdHlfZnVsbCIsImFuYWx5dGljc19mdWxsIiwidG9rZW5zX2Z1bGwiLCJ3ZWJob29rc19mdWxsIiwidGVtcGxhdGVzX2Z1bGwiLCJzdXBwcmVzc2lvbnNfZnVsbCIsInNtc19mdWxsIiwiZW1haWxfdmVyaWZpY2F0aW9uX2Z1bGwiLCJpbmJvdW5kc19mdWxsIiwicmVjaXBpZW50c19mdWxsIl19.COLsCzV4NQhhgHgPzMOI0cOm0w7VeZRP6DhzV1z8TqnYZJ8zO988a9f1YyKj3pb6lXQurA34a9TAr1QNxGHZYR4RKVth4YBysbdRheDDX30YXwfQBzhiH_rihZOiOkJ0lBdHvHqpNiu2vCbVAcJl41AEeh1W-Z3YXblMdOUyfr2uhd1SGimmdmzHqk1BiJFiJ5wOttxnh93DVkqY43bq0fHNou2y6EOSm8OgygFNwHWFoE8xLHm8vxggLNJuDdIHCW-JCmY0IEZznyYQDlPHRzNwM0P17QLFaubmlaQ_Q4Zn7cd3TfjeYJaV6kubnt3pze0pSnJYdBZVVdkaPP3pbN6aGxUiS0I_IMjfITLA4Nii618My1-ZhJnvrGzbHSndPusctvyyCAwOsef2TP5xuilzFg-z0KgitVOtrtwcBzvGiUGgpxXu0t598_dNgr_zWWAGgcxTt2shnKDguEeovjucV4PiJN0GNLJejygtRhQDkrGttLcZ0ld9TZMD9vyDpyTMubKdFkiwpK496VSAUUEKzgS94vvqhze4ZCiAxDQiJ5DIJb5pREcmPGi7yIXhA3BlM2AEudLGA4vi6R-gOxlpvA_OBOMQN2JKwHBtjU1WT_VO7IbdBYvPBcaLjFSyxgsYziprGfwTFFGdbP5mJOqlgNkv7_s1aoc1H6UDQ3E'
  );

  var raw = JSON.stringify({
    from: {
      email: 'prshoot24@prshootmumbai.com',
    },
    to: [
      {
        email: 'prateek3693@gmail.com',
      },
    ],
    subject: 'Hello from MailerSend!',
    text: `Name: ${body.name} \n Email: ${body.email} \n Mobile: ${body.mobile} \n Message: ${body.message}`,
    // html: 'Greetings from the team, you got this message through MailerSend.',
  });

  var requestOptions = {
    method: 'POST',
    headers: myHeaders,
    body: raw,
    redirect: 'follow',
  };

  fetch('https://api.mailersend.com/v1/email', requestOptions)
    .then(response => response.text())
    .then(result => console.log(result))
    .catch(error => console.log('error', error));
}
