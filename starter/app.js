// budget controller
var budgetController = (function()
{
    var Expense = function(id, description, value) {
        this.id = id;
        this.description = description;
        this.value = value;
    };
    
    var Income = function(id, description, value) {
        this.id = id;
        this.description = description;
        this.value = value;
    };
    
    var data = {
        allItems: {
            expenses: [],
            incomes: []
        },
        totals: {
            expenses: 0,
            incomes: 0
        }
    }
    
})();

// ui controller
var UIController = (function()
{
    var DOMstrings = {
        inputType: '.add__type',
        inputDescription: '.add__description',
        inputValue: '.add__value',
        inputBtn: '.add__btn'
    }
    
   return {
       getInput: function() {
           return {
            type: document.querySelector(DOMstrings.inputType).value, //either income or expense
            description: document.querySelector(DOMstrings.inputDescription).value,
            value: document.querySelector(DOMstrings.inputValue).value
           };
           
       },
       getDOMstrings: function() {
           return DOMstrings;
       }
   };
    
})();


// global app controller
var controller = (function(budgetCtrl, UICtrl)
{
    var setupEventListeners = function() {
        var DOM = UICtrl.getDOMstrings();
        
        document.querySelector(DOM.inputBtn).addEventListener('click', ctrlAddItem);
    
        document.addEventListener('keypress', function(event) {
            if (event.keyCode === 13 || event.which === 13) {
                ctrlAddItem();
            }
        });
    };
    
    var ctrlAddItem = function() {
        // 1. get the input data
        var input = UICtrl.getInput();
        console.log(input);
        
        // 2. add the item to the budget controller
        
        // 3. add the item to the UI
        
        // 4. calculate the budget
        
        // 5. display the budget on the UI

    };
    
    return {
        init: function() {
            setupEventListeners();
        }
    };
    
    
})(budgetController, UIController);


controller.init();







































