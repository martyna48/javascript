const btn = document.getElementById('button');
const output = document.getElementById('offers');

function getOffersAsync() {
    let httpReq = new XMLHttpRequest(); //wbudowana klasa JS
    let template = '';

    httpReq.open('GET', 'http://leguralnie.pl/json/ogloszenia-json.json');
    httpReq.addEventListener('readystatechange', function () {   //operacja zakonczona
        if (this.readyState == 4 && this.status == 200) {
            let content = this.responseText;
            content = JSON.parse(content);

            content.forEach(element => {
                template += `<div class='offer'>
                            <figure>
                                <img src='${element.image}'>
                            </figure>
                            <div class='offer__description'>
                                <small>ID: ${element.id}</small> 
                            </div>            
                            </div>`
            })
            if(template !='') {
                output.innerHTML = template;
            }
        }
    });

    httpReq.send()
}

btn.addEventListener('click', getOffersAsync);





// $(function(){

// function pobierzDane() {
//     $.ajax({
//         url: "http://leguralnie.pl/json/ogloszenia-json.json",
//         dataType:'json',
//         success: function (resultJSON) {
//             console.log(resultJSON);
//         },
//         error: function (msg) {
//             console.log(msg);
//         }
//        }); 

//     }

//     let button = $('.button');
//     button.click(function() {
//         pobierzDane();

//     });
//  })
