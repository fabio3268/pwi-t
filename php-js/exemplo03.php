<div>
</div>
<script type="text/javascript" async>
    const url = 'pessoa.php';
    const person = async () => {
        const data = await fetch(url);
        //console.log(await data.json());
        const personObj = await data.json();
        console.log(personObj);
    };
    person();
</script>
