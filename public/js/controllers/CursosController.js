angular.module('ifsp').controller('CursosController',
    function ($scope) {
        $scope.total = 0;
        $scope.incrementa = function () {
            $scope.total++;
        };

        $scope.cursos = [
            { "_id": 1, "nome": "Engenharia de Produção", "coordenador": "fabio.teixeira@ifsp.edu.br" },
            { "_id": 2, "nome": "Tecnologia em Análise e Desenvolvimento de Sistemas", "coordenador": "fabiano.teixeira@ifsp.edu.br" },
            { "_id": 3, "nome": "Licenciatura em Letras Português/Inglês", "coordenador": "melissa.teixeira@ifsp.edu.br" },
            { "_id": 3, "nome": "Tecnologia em Gestão Pública", "coordenador": "melissa.teixeira@ifsp.edu.br" }
        ];
        $scope.filtro = '';

    });