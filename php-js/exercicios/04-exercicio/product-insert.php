<!DOCTYPE html>
<html lang="pt-br">
<head>
    <meta charset="UTF-8">
    <meta name="viewport" content="width=device-width, initial-scale=1.0">
    <link rel="stylesheet" href="assets/styles-insert-product.css">
    <script type="module" src="assets/script-insert-product.js" async></script>
    <title>..:: Formulário de Inclusão de Produto ::..</title>
</head>
<body>
<div class="container">
    <h1>Formulário de Inclusão de Produto</h1>
    <form id="product-form">
        <label for="productName">Nome do Produto:</label>
        <input type="text" id="productName" name="productName">
        <label for="productPrice">Preço:</label>
        <input type="number" id="productPrice" name="productPrice" step="0.01">
        <label for="category">Categoria:</label>
        <select id="category" name="productCategory">
            <option value="">Selecione uma Categoria</option>
        </select>
        <button type="submit">Adicionar Produto</button>
    </form>
</div>
</body>
</html>
