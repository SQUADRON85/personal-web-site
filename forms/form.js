var btn=document.getElementById('form_btn');
    btn.addEventListener('click',function (e) {
        e.preventDefault()
      var name=document.getElementById('name');
      var email=document.getElementById('email');
      var phone=document.getElementById('phone');
      var message=document.getElementById('message');
      var body= 'name:'+name+'<br> Email:'+email+'<br> Phone number:'+phone+'<br> Message:'+message;

      Email.send({
                     SecureToken : "beb36356-75a7-46be-9685-2e9b6d009007",
                     To : 'anand85930@gmail.com',
                     From : email,
                     Subject : "This is the subject",
                     Body : body
                      }).then(
                     message => alert(message)
                 );

        }) 