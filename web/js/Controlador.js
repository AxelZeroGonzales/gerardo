angular.module('todoAp', [])
        .controller('ControladorTareas', ['$scope', function ($scope) {

                var ctrl = this;
                var visibilidad = false;
                ctrl.tareas = [];
                ctrl.agregarTarea = function () {
                    ctrl.tareas.push({texto: ctrl.textoNuevaTarea, texto2: ctrl.textoNuevaTarea2, texto3: ctrl.textoNuevaTarea3, texto4: ctrl.textoNuevaTarea4, texto5: ctrl.textoNuevaTarea5, texto6: ctrl.textoNuevaTarea6, texto10: ctrl.textoNuevaTarea10});
                    ctrl.textoNuevaTarea = '';
                    ctrl.textoNuevaTarea3 = '';
                    ctrl.textoNuevaTarea4 = '';
                    ctrl.textoNuevaTarea5 = '';
                    ctrl.textoNuevaTarea6 = '';
                    ctrl.textoNuevaTarea10 = '';
                };

                ctrl.restantes = function () {
                    var cuenta = 0;
                    angular.forEach(ctrl.tareas, function (tarea) {
                        cuenta += tarea.hecho ? 0 : 1;
                    });
                    return cuenta;
                };

                ctrl.eliminar = function (dato) {
                    var pos = ctrl.tareas.indexOf(dato);
                    ctrl.tareas.splice(pos);
                };
                ctrl.bueno = function () {
                    ctrl.textoNuevaTarea2 = 'Bueno';
                };
                ctrl.regular = function () {
                    ctrl.textoNuevaTarea2 = 'Regular';
                };
                ctrl.malo = function () {
                    ctrl.textoNuevaTarea2 = 'Malo';
                };
                ctrl.operativo = function () {
                    ctrl.textoNuevaTarea2 = 'Operativo';
                };
                ctrl.inoperativo = function () {
                    ctrl.textoNuevaTarea2 = 'Inoperativo';
                };
                ctrl.Visible = function () {
                    visibilidad = true;
                };
                ctrl.Oculto = function () {
                    visibilidad = false;
                };



            }]);
 