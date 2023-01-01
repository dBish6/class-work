# Purpose: a used car lot and would like a program to keep track of his sales.
# Author: David Bishop
# Oct 29, 2021 | Completed: Nov 6, 2021

import datetime

# input...
print()
print('Type "A" for agree and "D" for disagree...')
inquiry = input("Please answer with respect. Some personal information is required [A|D]: ").upper()
if inquiry == "D":
    print()
    quit("*Must agree to continue*".upper())
elif inquiry != "A":
    print()
    quit('*Cannot Proceed* - Invaild input "{}"'.upper().format(inquiry))
else:
    pass

while True:

    # Input and validation of customer first name.
    while True:
        print()
        allowed_char = set("ABCDEFGHIJKLMONPQRSTUVWXYZ abcdefghijklmnopqrstuvwxyz-'")
        first_name = input("Enter first name: ").title()
        if first_name == "":
            print()
            print("*No first name was given - please answer the prompt question*".upper())
            continue
        elif set(first_name).issubset(allowed_char) is False:
            print()
            print("*Invalid first name - cannot contain invalid characters*".upper())
            continue
        else:
            break

    # Input and validation of customer last name.
    while True:
        print()
        allowed_char = set("ABCDEFGHIJKLMONPQRSTUVWXYZ abcdefghijklmnopqrstuvwxyz-'")
        last_name = input("Enter last name: ").title()
        if last_name == "":
            print()
            print("*No last name was given - please answer the prompt question*".upper())
            continue
        elif not set(last_name).issubset(allowed_char):
            print()
            print("*Invalid last name - cannot contain invalid characters*".upper())
            continue
        else:
            break

    # Input and validation of customer street address.
    while True:
        print()
        street_add = input("Enter street address: ")
        if street_add == "":
            print()
            print("*No address was given - please answer the prompt question*".upper())
            continue
        else:
            break

    # Input and validation of customer city.
    while True:
        print()
        cus_city = input("Enter city of living: ")
        if cus_city == "":
            print()
            print("*No city was given - please answer the prompt question*".upper())
            continue
        else:
            break

    # Input and validation of customer province.
    while True:
        print()
        cus_province = input("Enter province of living: ").upper()
        if cus_province == "":
            print()
            print("*No province was given - please answer the prompt question*".upper())
            continue
        elif len(cus_province) > 2:
            print()
            print("*Province must be 2 initials - please enter a valid province*".upper())
            continue
        elif cus_province != "AB" and cus_province != "BC" and cus_province != "MB" and cus_province != "NB" and cus_province != "NL" and cus_province != "NT" and cus_province != "NS" and cus_province != "NU" and cus_province != "ON" and cus_province != "PE" and cus_province != "QC" and cus_province != "SK" and cus_province != "YT":
            print()
            print("*\"{}\" is not a real province - please enter a valid province*".format(cus_province).upper())
            continue
        else:
            break

    # Input and postal code validation.
    while True:
        print()
        cus_postal = input("Enter postal code (A1A1A1): ").upper()
        if cus_postal == "":
            print()
            print("*No postal code was given - please answer the prompt question*".upper())
            continue
        elif len(cus_postal) != 6:
            print()
            print("*Postal code format must be 6 digits long with no spaces (A1A1A1) - please try again*".upper())
            continue
        elif cus_postal[0].isdigit() or cus_postal[2].isdigit() or cus_postal[4].isdigit():  # check to ensure values
            # Ensures alphabetical letter are in the right position.
            print()
            print("*\"{}\" is not a valid postal code - please enter digits in the following blanks (A_A_A_)*".format(
                cus_postal).upper())
            continue
        elif cus_postal[1].isalpha() or cus_postal[3].isalpha() or cus_postal[5].isalpha():  # check to ensure values
            # Ensures numbers are in the right position.
            print()
            print("*\"{}\" is not a valid postal code - please enter letters in the following blanks (_1_1_1)*".format(
                cus_postal).upper())
            continue
        else:
            cus_postal = f"{cus_postal[0:3]} {cus_postal[3:6]}"  # Postal code formatting.
            break

    # Input and validation of customer phone number.
    while True:
        print()
        cus_pnum = input("Enter phone number (No dashes or spaces): ")
        if cus_pnum == "":
            print()
            print("*No phone number was given - please answer the prompt question*".upper())
            continue
        elif cus_pnum.isdigit() is False:
            print()
            print("*\"{}\" is not a valid number - please enter a real number*".format(cus_pnum).upper())
            continue
        elif len(cus_pnum) != 10:
            print()
            print("*Phone number must be 10 digits - please try again*".upper())
            continue
        else:
            break

    # Input and validation of the policy date.
    while True:
        print()
        try:
            policy_date = input("Enter policy date (YYYY-MM-DD): ")
            policy_date = datetime.datetime.strptime(policy_date, "%Y-%m-%d")  # Converting to datetime format.
        except:
            print()
            print("*Invalid policy date - must be in the format YYYY-MM-DD*".upper())
        else:
            break

    # Input and validation of plate number.
    while True:
        print()
        plate_num = input("Enter plate number of vehicle (XXX999): ").upper()
        if plate_num == "":
            print()
            print("*No plate number was given - please answer the prompt question*".upper())
            continue
        elif len(plate_num) > 6:
            print()
            print("*Plate number must be 6 in length - please try again*".upper())
            continue
        elif not plate_num[0:3].isalpha() and not plate_num[3:6].isdigit():
            print()
            print("*Invalid plate number format - please enter the following format (XXX999)*".upper())
            continue
        elif not plate_num[0:3].isalpha():
            print()
            print("*Invalid plate number format - please enter letters in the following blanks (___999)*".upper())
            continue
        elif not plate_num[3:6].isdigit():
            print()
            print("*Invalid plate number format - please enter digits in the following blanks (XXX___*)".upper())
            continue
        else:
            break

    # Input and validation of the car make.
    while True:
        print()
        car_make = input("Enter make of the vehicle: ").title()
        if car_make == "":
            print()
            print("*No make was given - please answer the prompt question*".upper())
            continue
        else:
            break

    # Input and validation of the car year.
    while True:
        print()
        car_year = input("Enter year of the vehicle: ").title()
        if car_year == "":
            print()
            print("*No make was given - please answer the prompt question*".upper())
            continue
        else:
            break

    # Input and validation of the selling price.
    while True:
        print()
        car_sell_price = input("Enter vehicle selling price: ")
        if car_sell_price == "":
            print()
            print("*No value was given - please answer the prompt question*".upper())
            continue
        try:
            float(car_sell_price)
        except ValueError:
            print()
            print("*\"{}\" is not a valid number - please enter a value*".format(car_sell_price).upper())
            continue
        if float(car_sell_price) > 50000:
            print()
            print("*Car selling price cannot exceed $5,000.00 - please try again*")
            continue
        else:
            break

    # Input and validation of the car trade in amount.
    while True:
        print()
        amt_trade = input("Vehicle trade in amount: ")
        if amt_trade == "":
            print()
            print("*No amount was given - please answer the prompt question*".upper())
            continue
        try:
            float(amt_trade)
        except ValueError:
            print()
            print("*\"{}\" is not a valid trade in amount - please enter a value*".format(amt_trade).upper())
            continue
        if float(amt_trade) > float(car_sell_price):
            print()
            print("*Vehicle trade in amount cannot exceed the selling price - please try again*".upper())
            continue
        else:
            break

    # Input and validation of the salesperson's name.
    while True:
        print()
        salesperson = input("Enter salesperson's name: ").title()
        if salesperson == "":
            print()
            print("*No salesperson was given - please answer the prompt question*".upper())
            continue
        else:
            break

    # Input and validation of the credit card number.
    while True:
        print()
        credit_card = input("Enter a credit card number: ")
        if credit_card == "":
            print()
            print("*No number was given - please answer the prompt question*".upper())
            continue
        elif not credit_card.isdigit():
            print()
            print("*Credit card number must be all digits - please try again*".upper())
        elif len(credit_card) != 16:
            print()
            print("*Credit card number must be 16 digits - please try again*".upper())
            continue
        else:
            break

    # Input and validation of the expiry date of credit card.
    while True:
        print()
        expiry_date = input("Enter expiry date of credit card: ")
        if expiry_date == "":
            print()
            print("*No date was given - please answer the prompt question*".upper())
            continue
        else:
            break

    # My Constants
    HST = 0.15
    NLSTANDARD_RATE = 75.00
    NLEXECCED_RATE = 165.00
    TRANSFER_FEE = 0.01
    LUXURY_TAX = 0.016

    # Processing Calculations...
    # These are cost expenses calculations.
    price_after_trade = float(car_sell_price) - float(amt_trade)
    tax = float(car_sell_price) * HST

    if float(car_sell_price) <= 5000:
        licence_fee = NLSTANDARD_RATE
    else:
        licence_fee = NLEXECCED_RATE

    trans_fee = float(car_sell_price) * TRANSFER_FEE

    if float(car_sell_price) > 20000:
        lux_tax = float(car_sell_price) * LUXURY_TAX
    else:
        lux_tax = 0
    lux_tax += licence_fee

    total_sell_price = price_after_trade + tax + licence_fee + trans_fee

    # Payment schedule and calculations.
    print()
    print("# Years    # Payments    Financing Fee   Total Price   Monthly Payment")
    print("-" * 70)
    for years in range(1, 5):
        num_payments = 12 * years
        finance_fee = 39.99 * years
        total_price = total_sell_price + 39.99 * years
        monthly_pay = total_price / num_payments

        finance_fee_form = f"${finance_fee:,.2f}"
        total_price_form = f"${total_price:,.2f}"
        monthly_pay_form = f"${monthly_pay:,.2f}"

        print(f"    {years}           {num_payments}       {finance_fee_form:>10}      {total_price_form:>10}     {monthly_pay_form:>10}")

    print()
    currDate = datetime.datetime.today()
    print("Purchase date:       ", currDate.strftime("%B %d, %Y"))
    currDate30 = currDate + datetime.timedelta(days=30)
    print("First payment date:  ", currDate30.strftime("%B %d, %Y"))

    # Payment schedule choice input.
    while True:
        print()
        pay_schedule = input("Enter the payment schedule you want to follow (1-4): #")
        if pay_schedule == "":
            print()
            print("*Nothing was given - please answer 1 through 4*".upper())
            continue
        elif pay_schedule != "1" and pay_schedule != "2" and pay_schedule != "3" and pay_schedule != "4":
            print()
            print("*Must be an answer from 1 through 4 - please try again*".upper())
            continue
        else:
            break

    # Total payments number.
    total_payments = int(pay_schedule) * 12

    # Was having trouble to print the "Monthly payment" out properly
    # because when you use the same calculation as previously defined
    # it prints out the full calculation at 4 years everytime, even when you never choose 4.
    total_price = total_sell_price + 39.99 * int(pay_schedule)  # So, this should stop that and use the proper years.
    monthly_pay = total_price / (12 * int(pay_schedule))

    # Prompt to end the program or continue.
    print()
    print('Type "End" to quit...')
    contin = input("Press enter if you would like to enter another sale: ").upper()
    if contin == "END":
        break
    else:
        pass

# Output Formatting
car_sell_price_form = f"${float(car_sell_price):,.2f}"
amt_trade_form = f"${float(amt_trade):,.2f}"
price_after_trade_form = f"${price_after_trade:,.2f}"
tax_form = f"${tax:,.2f}"
licence_fee_form = f"${licence_fee:,.2f}"
trans_fee_form = f"${trans_fee:,.2f}"
total_sell_price_form = f"${total_sell_price:,.2f}"
monthly_pay_form = f"${monthly_pay:,.2f}"

# Output...
print()
print(" "*10, "Honest Harry Car Sales")
print(" "*8, "Used Car Sales and Receipt")
print()
print(" "*2, f"Invoice Date: {currDate.strftime('%B %d, %Y')}")
print(" "*2, f"Receipt No: {first_name[0]}{last_name[0]}-{plate_num[3:6]}-{cus_pnum[6:11]}")
print()
print(" "*2, "Sold to:")
print(" "*7, f"{first_name[0]}. {last_name}")
print(" "*7, f"{street_add}")
print(" "*7, f"{cus_city}, {cus_province}, {cus_postal}")
print()
print(" "*2, "Car Details:")
print(" "*7, f"{car_year} {car_make}")
print()
print(" "*2, f"Sale price:             {car_sell_price_form:>10}")
print(" "*2, f"Trade Allowance:        {amt_trade_form:>10}")
print(" "*2, f"Price after Trade:      {price_after_trade_form:>10}")
print("                           ----------")
print(" "*2, f"HST:                    {tax_form:>10}")
print(" "*2, f"License Fee:            {licence_fee_form:>10}")
print(" "*2, f"Transfer Fee:           {trans_fee_form:>10}")
print("                           ----------")
print(" "*2, f"Total Sales Cost:       {total_sell_price_form:>10}")
print()
print(" "*2, f"Terms: {pay_schedule}        Total payments: {total_payments}")
print(" "*2, f"Monthly payment:        {monthly_pay_form:>10}")
print()
print(" "*6, "Honest Harry Car Sales")
print(" "*2, "Best used cars at the best price!")
