<?php
require __DIR__ . '/../frame/lpwphp.php';
LPWPHPClassName("?? - Formuários e filtros");

/*
 * [ request ] $_REQUEST
 * https://php.net/manual/pt_BR/book.filter.php
 */
LPWClassSession("request", __LINE__);


include __DIR__ . "/form.php";

/*
 * [ post ] $_POST | INPUT_POST | filter_input | filter_var
 */
LPWClassSession("post", __LINE__);

//include __DIR__ . "/form.php";

/*
 * [ get ] $_GET | INPUT_GET | filter_input | filter_var
 */
LPWClassSession("get", __LINE__);


/*
 * [ filters ] list | id | var[_array] | input[_array]
 * http://php.net/manual/pt_BR/filter.constants.php
 */
LPWClassSession("filters", __LINE__);
