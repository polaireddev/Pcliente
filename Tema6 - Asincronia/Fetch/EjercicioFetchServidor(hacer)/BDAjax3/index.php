<html>
<head>
</head>
<body>
	<h2>PROVINCIAS Y POBLACIONES</h2>
	<p>Elije una provincia y verás sus poblaciones</p>
	<!-- <form action="siguiente.php" id="formulario"> -->
		<form action=# id="formulario">
		Provincia:
		<select id='provincia' name='provincia'>
			<option value="0">Elije provincia</option>
			<?php
			include('cargar_provincias.php');
			?>
		</select>
		<div id='pepin'>Aqui Van las poblaciones </div>
		<input type='submit' value='Siguiente' />
	</form>
<script type="text/javascript" src="javascript.js"></script>
</body>
</html>