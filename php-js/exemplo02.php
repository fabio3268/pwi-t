<h1></h1>
<script type="text/javascript" async>
/*    const url = 'hello.php';
    const hello = async () => {
        const data = await fetch(url);
        console.log(await data.text());
    };
    hello();*/
    fetch('hello.php').then(async res => {
        //console.log(res);
        //console.log(await res.text());
        document.querySelector("h1").innerHTML = await res.text();
    });
</script>
