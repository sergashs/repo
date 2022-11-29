<template>
	<div class="functions-page">
		<div class="container">
			<h3 class="h3">Replase Inline Svg</h3>
			<pre>
 <code id="htmlViewer" style="color:rgb(248, 248, 242); font-weight:400;background-color:rgb(43, 43, 43);background:rgb(43, 43, 43);display:block;padding: .5em;">	<span style="color:rgb(248, 248, 242); font-weight:400;"><span style="color:rgb(0, 224, 224); font-weight:400;">replaseInlineSvg</span>(<span style="color:rgb(245, 171, 53); font-weight:400;">el</span>)</span> {
			<span style="color:rgb(220, 198, 224); font-weight:400;">const</span> imgID = el.getAttribute(<span style="color:rgb(171, 227, 56); font-weight:400;">&quot;id&quot;</span>);
			<span style="color:rgb(220, 198, 224); font-weight:400;">const</span> imgClass = el.getAttribute(<span style="color:rgb(171, 227, 56); font-weight:400;">&quot;class&quot;</span>);
			<span style="color:rgb(220, 198, 224); font-weight:400;">const</span> imgURL = el.getAttribute(<span style="color:rgb(171, 227, 56); font-weight:400;">&quot;src&quot;</span>);

			fetch(imgURL)
				.then(<span style="color:rgb(248, 248, 242); font-weight:400;">(<span style="color:rgb(245, 171, 53); font-weight:400;">data</span>) =&gt;</span> data.text())
				.then(<span style="color:rgb(248, 248, 242); font-weight:400;">(<span style="color:rgb(245, 171, 53); font-weight:400;">response</span>) =&gt;</span> {
					<span style="color:rgb(220, 198, 224); font-weight:400;">const</span> parser = <span style="color:rgb(220, 198, 224); font-weight:400;">new</span> DOMParser();
					<span style="color:rgb(220, 198, 224); font-weight:400;">const</span> xmlDoc = parser.parseFromString(response, <span style="color:rgb(171, 227, 56); font-weight:400;">&quot;text/html&quot;</span>);
					<span style="color:rgb(220, 198, 224); font-weight:400;">const</span> svg = xmlDoc.querySelector(<span style="color:rgb(171, 227, 56); font-weight:400;">&quot;svg&quot;</span>);

					<span style="color:rgb(220, 198, 224); font-weight:400;">if</span> (svg &amp;&amp; <span style="color:rgb(220, 198, 224); font-weight:400;">typeof</span> imgID !== <span style="color:rgb(171, 227, 56); font-weight:400;">&quot;undefined&quot;</span>) {
						svg.setAttribute(<span style="color:rgb(171, 227, 56); font-weight:400;">&quot;id&quot;</span>, imgID);
					}

					<span style="color:rgb(220, 198, 224); font-weight:400;">if</span> (svg &amp;&amp; <span style="color:rgb(220, 198, 224); font-weight:400;">typeof</span> imgClass !== <span style="color:rgb(171, 227, 56); font-weight:400;">&quot;undefined&quot;</span>) {
						svg.setAttribute(<span style="color:rgb(171, 227, 56); font-weight:400;">&quot;class&quot;</span>, imgClass + <span style="color:rgb(171, 227, 56); font-weight:400;">&quot; replaced-svg&quot;</span>);
					}

					<span style="color:rgb(220, 198, 224); font-weight:400;">if</span> (svg) {
						svg.removeAttribute(<span style="color:rgb(171, 227, 56); font-weight:400;">&quot;xmlns:a&quot;</span>);
					}

					<span style="color:rgb(220, 198, 224); font-weight:400;">if</span> (svg &amp;&amp; el.parentNode) {
						el.parentNode.replaceChild(svg, el);
					}
				});
		}</code></pre>
			<h3 class="h3">Correct Vh of screen</h3>
			<pre>
 <code id="htmlViewer" style="color:rgb(248, 248, 242); font-weight:400;background-color:rgb(43, 43, 43);background:rgb(43, 43, 43);display:block;padding: .5em;"><span style="color:rgb(248, 248, 242); font-weight:400;"><span style="color:rgb(0, 224, 224); font-weight:400;">correctVh</span>(<span style="color:rgb(245, 171, 53); font-weight:400;"></span>)</span> {
<span style="color:rgb(220, 198, 224); font-weight:400;">const</span> vh = <span style="color:rgb(245, 171, 53); font-weight:400;">window</span>.innerHeight * <span style="color:rgb(245, 171, 53); font-weight:400;">0.01</span>;
<span style="color:rgb(245, 171, 53); font-weight:400;">document</span>.documentElement.style.setProperty(<span style="color:rgb(171, 227, 56); font-weight:400;">&quot;--vh&quot;</span>, vh + <span style="color:rgb(171, 227, 56); font-weight:400;">&quot;px&quot;</span>);
}</code></pre>
		</div>
	</div>
</template>
