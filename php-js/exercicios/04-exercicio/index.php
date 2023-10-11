<!DOCTYPE html>
<html>
<head>
    <title>Login Form</title>
    <link rel="stylesheet" href="assets/styles.css">
    <script type="module" src="assets/script.js" async></script>
</head>
<body>

<div class="container">
    <h1>Lista de Produtos</h1>
    <div class="filter">
        <label for="category">Categoria:</label>
        <select id="category">
            <!-- Os valores serão listados aqui via JavaScript -->
            <!--            <option value="Roupas">Roupas</option>-->
            <!--            <option value="Alimentos">Alimentos</option>-->
            <!--            <option value="Móveis">Móveis</option>-->
            <!--            <option value="Esportes">Esportes</option>-->
        </select>
        <label for="productName">Nome do Produto:</label>
        <input type="text" id="productName">
    </div>
    <table>
        <thead>
        <tr>
            <th>ID</th>
            <th>Nome do Produto</th>
            <th>Preço</th>
        </tr>
        </thead>
        <tbody id="productList">
        <!-- Os produtos serão listados aqui via JavaScript -->
        <!--<tr><td>2</td><td>TV</td><td>343</td></tr>-->
        </tbody>
    </table>
</div>

<!-- Modal para editar produto -->
<div id="edit-modal" class="modal">
    <div class="modal-content">
        <span class="close">&times;</span>
        <h2>Editar Produto</h2>
        <form id="edit-form">
            <input type="hidden" id="productId" name="productId">
            <label for="productName">Nome do Produto:</label>
            <input type="text" id="productName" name="productName">
            <label for="productPrice">Preço:</label>
            <input type="number" id="productPrice" name="productPrice" step="0.01">
            <label for="productCategory">Categoria:</label>
            <select id="productCategory" name="productCategory">
                <option value="">Selecione uma Categoria</option>
            </select>
            <button type="submit">Salvar</button>
        </form>
    </div>
</div>

</body>
</html>

