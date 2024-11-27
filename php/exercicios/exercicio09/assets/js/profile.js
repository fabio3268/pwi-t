console.log("ludif");

fetch("api/users/user-get.php", {
    method: "GET"
}).then(response => {
    response.json().then(userAuth => {
        console.log(userAuth);
        if(userAuth.type == "success") {
            document.querySelector('#name').value = userAuth.data.name;
            document.querySelector('#email').value = userAuth.data.email;
            document.querySelector('#address').value = userAuth.data.address;
        }
        if(userAuth.data.photo) {
            document.querySelector('#user-photo').src = `storage/${userAuth.data.photo}`;
        }
    });
});


const formPhoto = document.querySelector('#form-photo');
const formProfile = document.querySelector('#form-profile');

formPhoto.addEventListener('submit', async (event) => {
    event.preventDefault();
    const data = await fetch('api/users/user-update-photo.php', {
        method: 'POST',
        body: new FormData(formPhoto)
    }).then(response => response.json());
    console.log(data.photo);
    if(data.type == "success" ) {
        document.querySelector('#user-photo').src = `storage/${data.photo}`;
    }
});

formProfile.addEventListener('submit', async (event) => {
    event.preventDefault();
    const user = await fetch('api/users/user-update.php', {
        method: 'POST',
        body: new FormData(formProfile)
    }).then(response => response.json());
    console.log(user);
});
