"use strict";

module.exports = function (scope, $element, attrs, imageController) {
    var images = [];
    var currentImage = 0;
    var allImagesDownloaded = false;
    var elementLoaded = false;
    var $image;

    var position = parseInt(attrs.position, 10);
    var start = parseInt(attrs.start, 10);
    var end = parseInt(attrs.end, 10);

    var imageCount = end - start + 1;


    function fetchAllImages(scope) {
        for (var i = start; i <= end; i++) {
            getImage(i).done(function ($image) {
               addImage($image);
            });
        }
    }

    function addImage($image) {

        $image.load(function () {
            images.push($image);
            if (images.length === imageCount) {
                scope.$emit("Loaded:Image");
            } else if (images.length === 1) {
                setDomImage();
            }
        });

    }

    function getImage(index) {
        var deferred = $.Deferred();

        setTimeout(
            (function (index) {
                var $image = $("<img />");
                var imagePath = "images/proposal/" + index + ".jpg";
                $image.attr('src', imagePath);
                deferred.resolve($image);
            })(index), 1);

        return deferred.promise();
    }

    function setDomImage() {
        $element.empty();
        $element.append(images[currentImage]);
    }

    function incrementPosition() {
        position++;
        if (position === 4) {
            position = 0;
        }
    }
    function incrementCurrentImage() {
        currentImage++;
        if (currentImage === images.length) {
            currentImage = 0;
        }
    }
    function changeImage() {
        var css = $image.css(["left","top"]);
        incrementCurrentImage();
        setDomImage();
        $image = $element.find('img');
        $image.css(css);
    }
    function flipImage(duration) {
        $image.flippy({direction: "RIGHT", duration: duration, onFinish: function () {
            changeImage();
        }});
    }

    function flipImageAndAnimate() {
        $image.flippy({direction: "RIGHT", duration: 1000, onFinish: function () {
            changeImage();
            incrementAndExecute(24000);
        }});
    }

    function incrementAndExecute(time) {
        incrementPosition();
        var style = imageController.getPositionStyle(position);
        return animatePromise($image, style, time);
    }
    function animatePromise($el, style, time) {
        $el.animate(style, time);
    }

    scope.$on("InitialPosition:ImageFloater", function () {
        $image = $element.find('img');

        var style = imageController.getPositionStyle(position);
        var midStyle = imageController.getMidPositionStyle(position);

        //Move to Corners
        setTimeout(function () {
            animatePromise($image, style, 1000);
        }, 0);

        //Move to center positions
        setTimeout(function () {
            animatePromise($image, midStyle, 1000);
        }, 1000);

        //Flip 1 out of 2
        setTimeout(function () {
            flipImage(1000);
        }, 8910);

        //Flip 2 out of 2
        setTimeout(function () {
            flipImage(1000);
        }, 15540);

        //Move to starting positions
        setTimeout(function () {
            animatePromise($image, style, 3000);
        }, 25470);

        //Start flip and animate 1 out of 4
        setTimeout(function () {
            flipImageAndAnimate();
        }, 28740);

        //Start flip and animate 2 out of 4
        setTimeout(function () {
            flipImageAndAnimate();
        }, 55090);

        //Let It Be Me Sequence 1 out of 2
        setTimeout(function () {
            flipImage(3000);
        }, 108500);
        setTimeout(function () {
            flipImage(3000);
        }, 115260);
/*        setTimeout(function () {
            flipImage(3000);
        }, 121970);*/
        setTimeout(function () {
            flipImage(3000);
        }, 128970);

        //Start flip and animate 3 out of 4
        setTimeout(function () {
            flipImageAndAnimate();
        }, 135500);

        //Start flip and animate 4 out of 4
        setTimeout(function () {
            flipImageAndAnimate();
        }, 162500);

        //Let It Be Me Sequence 2 out of 2
        setTimeout(function () {
            flipImage(3000);
        }, 216010);
        setTimeout(function () {
            flipImage(3000);
        }, 222740);
/*        setTimeout(function () {
            flipImage(3000);
        }, 229420);*/
        setTimeout(function () {
            flipImage(3000);
        }, 236070);

        //Move to center positions
        setTimeout(function () {
            animatePromise($image, midStyle, 3000);
        }, 242880);

        //Ending Continuous Flip Sequence
        setTimeout(function () {
            flipImage(3000);
        }, 246000);
        setTimeout(function () {
            flipImage(3000);
        }, 251000);
        setTimeout(function () {
            flipImage(3000);
        }, 256000);
        setTimeout(function () {
            flipImage(3000);
        }, 261000);
        setTimeout(function () {
            flipImage(3000);
        }, 266000);
        setTimeout(function () {
            flipImage(3000);
        }, 271000);
        setTimeout(function () {
            flipImage(3000);
        }, 276000);
    });

    scope.$on("Hide:Images", function () {
        $image = $element.find('img');
        $image.fadeOut(3000);
    });

    fetchAllImages(scope);
};