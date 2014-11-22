'use strict';
/**
 * @ngdoc directive
 * @name ng-twapp.signature.signature
 * @description nng-twappsignature directive
 */
angular.module('ng-twapp.signature').directive('signature', function () {
  return {
    restrict: 'A',
    link: function (scope, element) {
      var PARENT_PADDING_AMOUNT_X = 0;
      var PARENT_PADDING_AMOUNT_Y = 0;
      var parent = element.parent();
      var ctx = element[0].getContext('2d');
      ctx.canvas.width = Math.min(parent.width(), 400);
      var drawing = false;
      var lastPt;

      var setLastPoint = function (x, y) {
        lastPt = {
          x: x,
          y: y
        };
      };

      var getX = function (e) {
        if (e.originalEvent.touches) {
          var t = e.originalEvent.touches[0];
          return t.pageX - parent[0].offsetLeft - parent[0].offsetParent.offsetLeft - PARENT_PADDING_AMOUNT_X;
        }
        else {
          return e.offsetX;
        }
      };

      var getY = function (e) {
        if (e.originalEvent.touches) {
          var t = e.originalEvent.touches[0];
          return t.pageY - element[0].offsetHeight - element[0].offsetParent.offsetHeight - PARENT_PADDING_AMOUNT_Y;// - parent[0].offsetParent.offsetHeight;
        }
        else {
          return e.offsetY;
        }
      };

      scope.$watch('clear', function () {
        if (scope.clear) {
          ctx.clearRect(0, 0, ctx.canvas.width, ctx.canvas.height);
          scope.clear = false;
        }

      });

      scope.$watch('save', function () {
        if (scope.save) {
          scope.imageData = ctx.canvas.toDataURL();
          scope.save = false;
        }

      });

      element.on('mousedown touchstart', function (e) {
        e.preventDefault();
        drawing = true;

        var x = getX(e);
        var y = getY(e);
        ctx.fillRect(x, y, 2, 2);
        setLastPoint(x, y);
      });
      element.on('mousemove touchmove', function (e) {
        if (drawing) {
          e.preventDefault();
          var x = getX(e);
          var y = getY(e);
          if (lastPt) {
            ctx.beginPath();
            ctx.moveTo(lastPt.x, lastPt.y);
            ctx.lineTo(x, y);
            ctx.stroke();
          }
          setLastPoint(x, y);
        }
      });
      element.on('mouseup touchend', function (e) {
        e.preventDefault();
        drawing = false;
        lastPt = null;
      });
    }
  };
});
