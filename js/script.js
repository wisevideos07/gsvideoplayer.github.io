$('#addVideosBtn').click(function() {
  $(this).parents().find('#addVideosInput').click();
});

document.getElementById('addVideosInput').onchange = e => {
  const file = e.target.files[0];
  const url = URL.createObjectURL(file);
  const video = 	` 
					<video 
						controls="controls" 
						src=" ${url} " 
						type="video/mp4" 
						style="width: 100%; height: 100vh;">
					</video>
					<span><i class="fa fa-trash"></i></span>
				`
  $('.video-list').append(video);
};
