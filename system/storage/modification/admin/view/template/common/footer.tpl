<footer id="footer"><?php echo $text_footer; ?><br /><?php echo $text_version; ?></footer></div>


<?php if ($mainteance) { ?>
<div style="position:fixed;bottom:0;left:0; width:64px;height:56px;z-index:1000">
	<a href="<?php echo $mainteance_url; ?>"><img src="view/image/danger.png" alt="" /></a>
</div>

<?php }; ?> 
</body></html>
