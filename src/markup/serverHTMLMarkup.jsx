const serverHTMLMarkup = (js, serialize, initialI18nStore, initialLanguage, markup) => (`
<!doctype html>
<html lang="">
	<head>
		<meta httpEquiv="X-UA-Compatible" content="IE=edge" />
		<meta charSet='utf-8' />
		<title>Cloop | Swiyt</title>
		<meta name="viewport" content="width=device-width, initial-scale=1">
		<link rel="stylesheet" href="index.css">
		<script src="${js}" defer></script>
		<script>
			window.__PRELOADED_SATATE__ = ${serialize}
			window.initialI18nStore = JSON.parse('${JSON.stringify(initialI18nStore)}');
			window.initialLanguage = '${initialLanguage}';
		</script>
	</head>
	<body>
		<div id="root">${markup}</div>
	</body>
</html>
`);
export default serverHTMLMarkup;
