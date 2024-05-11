app.controller('MainController', ['$scope', function($scope) {
    $scope.today = new Date();
  
    $scope.appetizers = [
      {
        name: 'Caprese',
        description: 'Mozzarella, tomatoes, basil, balsmaic glaze.',
        price: 4.95
      },
      {
        name: 'Mozzarella Sticks',
        description: 'Served with marinara sauce.',
        price: 3.95
      },
      {
        name: 'Bruschetta',
        description: 'Grilled bread, garlic, tomatoes, olive oil.',
        price: 4.95
      }
    ];
  
    $scope.mains = [
      {
        name: 'Carbonara',
        description: 'Spaghetti with a creamy parmesan sauce and guanciale.',
        price: 15.95
      },
      {
        name: 'Risotto',
        description: 'Arborio rice, parmesan, cured ham.',
        price: 15.95
      },
      {
        name: 'Chicken Gnocchi Bake',
        description: 'Gnocchi, parmesan cream, chicken breast.',
        price: 14.95
      }
    ];
  
    $scope.extras = [
      {
        name: 'Cheesy Garlic Bread',
        description: 'Grilled garlic bread with melted cheese on top.',
        price: 2.95
      },
      {
        name: 'Sauce',
        description: 'Side of garlic sauce or parmesan cream.',
        price: 1.95
      }
    ];
  
  }]); 