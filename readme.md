<p>Custom radio & checkbox jQuery plugin; <br/>
by N0r8 millianorb@gmail.com;<br/>
for more info watch Wiki <a href="https://github.com/n0r8/Custom-radio-checkbox-buttons/wiki">Wiki</a><br/>
</p>
<code><pre>
	usage:
	$('your checkbox or radio selector').Custom({
		customStyleClass:'classForcustomView',
		customHeight:'height of checkbox or radio'
	});
</pre></code>
<p>example:</p>
<code><pre>
	$('input[type="checkbox"]').Custom({
		customStyleClass:'checkbox',
		customHeight:'16'
	});
</pre></code>
<p>If you need disable or enable button update them like this(in demo.html):</p>
<code><pre>
	$('#radio3').removeAttr('disabled').trigger('custom.refresh');
</pre></code>
<p>If you dinamical added button just recall plugin after html with buttons added(in demo.html):</p>
<code><pre>
		Create call then
		$(".radioclass").Custom({
			customStyleClass:'radio',
			customHeight:'25'
		});
		$(".checkboxclass").Custom({
			customStyleClass:'checkbox',
			customHeight:'20'
		});
</pre></code>