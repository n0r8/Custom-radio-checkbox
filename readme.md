<p>Custom radio & checkbox jQuery plugin; <br/>
by N0r8 millianorb@gmail.com;<br/>
for more info watch <a href="https://github.com/n0r8/Custom-radio-checkbox-buttons/wiki">Wiki</a><br/>
</p>
<pre><code>
usage:
	$('your checkbox or radio selector').Custom({
		customStyleClass:'classForcustomView',
		customHeight:'height of checkbox or radio'
	});
</code></pre>
<p>example:</p>
<pre><code>
	$('input[type="checkbox"]').Custom({
		customStyleClass:'checkbox',
		customHeight:'16'
	});
</code></pre>
<p>If you need disable or enable button update them like this(in demo.html):</p>
<pre><code>
	$('#radio3').removeAttr('disabled').trigger('custom.refresh');
</code></pre>
<p>If you dinamical added button just recall plugin after html with buttons added(in demo.html):</p>
<pre><code>
		Create call then
		$(".radioclass").Custom({
			customStyleClass:'radio',
			customHeight:'25'
		});
		$(".checkboxclass").Custom({
			customStyleClass:'checkbox',
			customHeight:'20'
		});
</code></pre>