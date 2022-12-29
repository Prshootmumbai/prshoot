

function validationForm() {


    // $("#contactForm").submit(function (e) {
    //     e.preventDefault();
    // });

    // var form = document.getElementById("contactForm");
    // function handleForm(event) { event.preventDefault(); }
    // form.addEventListener('submit', handleForm);
    // e.preventDefault();
    var fname = document.getElementById('inputName').value;
    var femail = document.getElementById('inputEmail').value;
    var fphone = document.getElementById('inputPhone').value;
    var faddress = document.getElementById('inputAddress').value;
    var fmessage = document.getElementById('inputMessage').value

    var arrayFormData = { fname, fphone, faddress, femail, fmessage }

    console.log('Form Data', arrayFormData)
    document.writeln('Your Info:-  <br/>' + 'Name:' + fname + '<br/>');
    document.writeln('Your Email:-' + femail)
    document.writeln('Your Phone:-' + fphone)
    document.writeln('Your Address:-' + faddress)
    document.writeln('Your Message:-' + fmessage)
    // console.log('fname', fname)
    // localStorage.setItem(fname, "fname")
    // localStorage.setItem(fphone, "fphone")
    // localStorage.setItem(femail, "femail")
    // localStorage.setItem(faddress, "faddress")
    // localStorage.setItem(fmessage, "fmessage")

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




//  const url='http://127.0.0.1:5500/contact.html';
// const url = 'http://contact.html'
// async function sendEmail(url) {
//     const response = await fetch(url);
//     var data = await response.json();
//     console.log(data);
// }