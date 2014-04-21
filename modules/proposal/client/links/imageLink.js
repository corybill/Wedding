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
                scope.$emit("ProposalImagesLoaded");
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
        var css = $image.css(["left","top"])
        incrementCurrentImage();
        setDomImage();
        $image = $element.find('img');
        $image.css(css);
    }
    function flipImage(duration) {
        var deferred = $.Deferred();

        $image.flippy({direction: "RIGHT", duration: duration, depth: .05, onFinish: function () {
            changeImage();
            deferred.resolve();
        }});

        return deferred.promise();
    }

    function incrementAndExecute() {
        incrementPosition();
        var style = imageController.getPositionStyle(position);
        return animatePromise($image, style, imageController.getAndIncrementImageMoveTime());
    }
    function animatePromise($el, style, time) {
        var deferred = $.Deferred();

        $el.animate(style, time, function () {
            deferred.resolve();
        })

        return deferred.promise();
    }

    scope.$on("ImageFloater:InitialPosition", function () {
        $image = $element.find('img');

        var style = imageController.getPositionStyle(position);
        var midStyle = imageController.getMidPositionStyle(position);
        animatePromise($image, style, 1000).then(function () {
            return animatePromise($image, midStyle, 1000);
        }).then(function () {
            return imageController.wait(6800);
        }).then(function () {
            return flipImage(1000);
        }).then(function () {
            return imageController.wait(5500);
        }).then(function () {
            return flipImage(1000);
        }).then(function () {
            return imageController.wait(8800);
        }).then(function () {
            return animatePromise($image, style, 3400);
        }).then(function () {
            return flipImage(1000);
        }).then(function () {
            return incrementAndExecute()
        }).then(function () {
            return incrementAndExecute()
        });
    });

    fetchAllImages(scope);
};