Feature: Ecommerce website

    Scenario: Placing an Order
        Given Users details "dsid070511@gmail.com" and "Sidhu@007"
        When Adding "ADIDAS ORIGINAL" to the cart
        Then verify the item is added to the cart
        When Enter valid details to place the order
        Then verify order is present in the order History
