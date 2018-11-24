$(document).ready(function() {
    paper.install(window);
    paper.setup(document.getElementById('mainCanvas'));

    var tool = new Tool();

    // draw a circle on every mouse click
    tool.onMouseDown = function(event) {
        var c = Shape.Circle(event.point, 20);
        c.fillColor = 'green';
    };
});