// Promise na mão
//var minhaPromise = function(){
//    return new Promise(function(resolve, reject){
//        var xhr = new XMLHttpRequest();
//        xhr.open('GET','http://api.github.com/users/jorgediasdsg')
//        xhr.send(null);
//
//        xhr.onreadstatechange = function(){
//            if (xhr.readState === 4){
//                if (xhr.status === 200){
//                    resolve(JSON.parse(xhr.responseText));
//                } else {
//                    reject('Erro na Requisição.');
//                }
//
//            }
//        }
//    });
//}
//minhaPromise()
//    .then(function(response){
//        console.log(response);
//    })
//    .catch(function(error){
//        console.warm(error);
//    });
//
//
axios.get('http://api.github.com/users/jorgediasdsg')
    .then(function(response) {
        console.log(response.data.avatar_url);
        console.log(response);
    })
    .catch(function(error){
        console.log(error);
    });