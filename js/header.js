document.writeln("<!DOCTYPE html>");
document.writeln("<html>");
document.writeln("	<head>");
document.writeln("		<meta charset=\'utf-8\'/>");
document.writeln("		<meta name=\'viewport\' id=\'vp\' content=\'initial-scale=1.0, maximum-scale=1.0, minimum-scale=1.0\'>");
document.writeln("		<title></title>");
document.writeln("		<link rel=\'stylesheet\' href=\'./css/mobilebase.css\'>");
document.writeln("		<link rel=\'stylesheet\' href=\'./css/header.css\'>");
document.writeln("		<!-- 引入jquery -->");
document.writeln("		<script src=\'https://cdn.staticfile.org/jquery/1.10.2/jquery.min.js\'></script>");
document.writeln("	</head>");
document.writeln("	<body>");
document.writeln("		<header id=\'head\'>");
document.writeln("			<section class=\'header\' id=\'h-l\'></section>");
document.writeln("			<section class=\'header\' id=\'h-r\'></section>");
document.writeln("			<section class=\'header\' id=\'h-c\'></section>");
document.writeln("		</header>");
document.writeln("	</body>");
document.writeln("	<script>");
document.writeln("		$(()=>{");
document.writeln("			$(\'#h-c\').text(document.title)");
document.writeln("		})");
document.writeln("	</script>");
document.writeln("</html>");