
window.addEventListener("DOMContentLoaded", function(){
  $("#popupModal").hide();
  setTimeout(function() {
  $("#popupModal").fadeIn("slow");
  }, 1000)
});

$(".close").on("click", function() {
  $("#popupModal").hide();
})

function myFunction() {
    document.getElementById("myDropdown").classList.toggle("show");
  }
  
 
  window.onclick = function(event) {
    if (!event.target.matches('.dropbtn')) {
      var dropdowns = document.getElementsByClassName("dropdown-content");
      var i;
      for (i = 0; i < dropdowns.length; i++) {
        var openDropdown = dropdowns[i];
        if (openDropdown.classList.contains('show')) {
          openDropdown.classList.remove('show');
        }
      }
    }
  }

  let slideIndex = 1;
  showSlides(slideIndex);
  
  function plusSlides(n) {
    showSlides(slideIndex += n);
  }
  
  function currentSlide(n) {
    showSlides(slideIndex = n);
  }
  
  function showSlides(n) {
    let i;
    let slides = document.getElementsByClassName("mySlides");
    let dots = document.getElementsByClassName("dot");
    if (n > slides.length) {slideIndex = 1}
    if (n < 1) {slideIndex = slides.length}
    for (i = 0; i < slides.length; i++) {
      slides[i].style.display = "none";
    }
    for (i = 0; i < dots.length; i++) {
      dots[i].className = dots[i].className.replace(" active", "");
    }
    slides[slideIndex-1].style.display = "block";
    dots[slideIndex-1].className += " active";
  }

  
document.addEventListener("DOMContentLoaded", () => {
	const observer = new IntersectionObserver(entries => {
	  entries.forEach(entry => {
		if (entry.isIntersecting) {
		  entry.target.classList.add('in-view');
		  return;
		}
		entry.target.classList.remove('in-view');
	  });
	});


	const allAnimatedElements = document.querySelectorAll('.animate');


	allAnimatedElements.forEach((element) => observer.observe(element));

}); 


document.addEventListener("DOMContentLoaded", () => {
	const observer = new IntersectionObserver(entries => {
	  entries.forEach(entry => {
		if (entry.isIntersecting) {
		  entry.target.classList.add('in-view2');
		  return;
		}
		entry.target.classList.remove('in-view2');
	  });
	});
	const allAnimatedElements = document.querySelectorAll('.animate2');
	allAnimatedElements.forEach((element) => observer.observe(element));
}); 




$("#myModal").hide();

$(".image1").click(function() {
  $("#modal-image").attr("src", "assets/brett1.jpeg");
  $("#myModal").show().click(function() {
    $("#myModal").hide();
  });
});

$(".image2").click(function() {
  $("#modal-image").attr("src", "assets/brett2.jpeg");
  $("#myModal").show().click(function() {
    $("#myModal").hide();
  });
});

$(".image3").click(function() {
  $("#modal-image").attr("src", "assets/brett3.jpg");
  $("#myModal").show().click(function() {
    $("#myModal").hide();
  });
});

$(".image4").click(function() {
  $("#modal-image").attr("src", "assets/brett4.jpeg");
  $("#myModal").show().click(function() {
    $("#myModal").hide();
  });
});

$(".image5").click(function() {
  $("#modal-image").attr("src", "assets/brett5.jpeg");
  $("#myModal").show().click(function() {
    $("#myModal").hide();
  });
});

$(".image6").click(function() {
  $("#modal-image").attr("src", "assets/brett6.jpeg");
  $("#myModal").show().click(function() {
    $("#myModal").hide();
  });
});

$(".image7").click(function() {
  $("#modal-image").attr("src", "assets/brett7.jpeg");
  $("#myModal").show().click(function() {
    $("#myModal").hide();
  });
});

$(".image8").click(function() {
  $("#modal-image").attr("src", "assets/brett8.jpeg");
  $("#myModal").show().click(function() {
    $("#myModal").hide();
  });
});

$(".image9").click(function() {
  $("#modal-image").attr("src", "assets/brett9.jpeg");
  $("#myModal").show().click(function() {
    $("#myModal").hide();
  });
});

$(".image10").click(function() {
  $("#modal-image").attr("src", "assets/brett10.jpeg");
  $("#myModal").show().click(function() {
    $("#myModal").hide();
  });
});

$(".image11").click(function() {
  $("#modal-image").attr("src", "assets/brett11.jpeg");
  $("#myModal").show().click(function() {
    $("#myModal").hide();
  });
});

$(".image12").click(function() {
  $("#modal-image").attr("src", "assets/brett12.jpeg");
  $("#myModal").show().click(function() {
    $("#myModal").hide();
  });
});

$(".image13").click(function() {
  $("#modal-image").attr("src", "assets/brett13.jpeg");
  $("#myModal").show().click(function() {
    $("#myModal").hide();
  });
});