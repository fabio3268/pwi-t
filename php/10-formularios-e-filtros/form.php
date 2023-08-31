<form name="post" action="./" method="<?= $method; ?>" novalidate enctype="multipart/form-data">
    <p style="margin-bottom: 10px; text-align: right"><a href="./" title="Atualizar">Atualizar</a></p>
    <div class="col2">
        <input type="text" name="Nome" value="<?= $name; ?>" placeholder="Nome:"/>
        <input type="email" name="Email" value="<?= $email; ?>" placeholder="E-mail:"/>
    </div>
    <button>Enviar Agora!</button>
</form>