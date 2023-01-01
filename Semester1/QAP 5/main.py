# Purpose: a program for One Stop Insurance Company to keep track of policy information.
# Author: David Bishop
# Date: Oct 25, 2021

import datetime
import time

# My Constants
f = open('OSICDef.dat', 'r')
POLICY_NUM = int(f.readline())
PREM_RATE = float(f.readline())
ADD_CAR_DIS = float(f.readline())
LIABILTY_COST = float(f.readline())
GLASS_COST = float(f.readline())
LOAN_CAR_COST = float(f.readline())
HST_RATE = float(f.readline())
PROCESS_FEE = float(f.readline())
f.close()

while True:

    # Input...
    while True:
        print()
        allowed_char = set("ABCDEFGHIJKLMONPQRSTUVWXYZ abcdefghijklmnopqrstuvwxyz-'")
        first_name = input("Enter first name: ").title()
        if first_name == "":
            print()
            print("*No first name was given - please answer the prompt question*".upper())
            continue
        elif set(first_name).issubset(allowed_char) == False:
            print()
            print("*Invalid first name - cannot contain invalid characters*".upper())
            continue
        else:
            break

    while True:
        print()
        allowed_char = set("ABCDEFGHIJKLMONPQRSTUVWXYZ abcdefghijklmnopqrstuvwxyz-'") # Probably don't need this here again.
        last_name = input("Enter last name: ").title()
        if last_name == "":
            print()
            print("*No last name was given - please answer the prompt question*".upper())
            continue
        elif set(last_name).issubset(allowed_char) == False:
            print()
            print("*Invalid last name - cannot contain invalid characters*".upper())
            continue
        else:
            break

    while True:
        print()
        street_add = input("Enter street address: ").title()
        if street_add == "":
            print()
            print("*No address was given - please answer the prompt question*".upper())
            continue
        else:
            break

    while True:
        print()
        cus_city = input("Enter city of living: ").title()
        if cus_city == "":
            print()
            print("*No city was given - please answer the prompt question*".upper())
            continue
        else:
            break

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
        else:
            break

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
            continue  # This could not be here.
        elif cus_postal[1].isalpha() or cus_postal[3].isalpha() or cus_postal[5].isalpha():  # check to ensure values
            # Ensures numbers are in the right position.
            print()
            print("*\"{}\" is not a valid postal code - please enter letters in the following blanks (_1_1_1)*".format(
                cus_postal).upper())
            continue
        else:
            cus_postal = f"{cus_postal[0:3]} {cus_postal[3:6]}"  # Postal code formatting.
            break

    while True:
        print()
        cus_pnum = input("Enter phone number (No dashes or spaces): ").upper()
        if cus_pnum == "":
            print()
            print("*No phone number was given - please answer the prompt question*".upper())
            continue
        elif cus_pnum.upper() == "NO":
            break
        elif cus_pnum.isdigit() == False:
            print()
            print("*\"{}\" is not a valid number - please enter a real number*".format(cus_pnum).upper())
            continue
        elif len(cus_pnum) != 10:
            print()
            print("*Phone number must be 10 digits - please try again*".upper())
            continue
        else:
            cus_pnum = f"({cus_pnum[0:3]}) {cus_pnum[3:6]}-{cus_pnum[6:]}"
            break

    while True:
        try:
            print()
            num_cars = int(input("Enter number of cars being insured: "))
        except ValueError:
            print()
            print("*Please answer the following question with a number - please try again".upper())
            continue
        else:
            if num_cars <= 0:
                print()
                print("*Number of cars must be greater then 0 - please try again*".upper())
            else:
                break

    while True:
        print()
        extra_liability = input("Any extra liability costs? [Y/N]: ").upper()  # Max of $1,000,000.
        if extra_liability == "":
            print()
            print("*No answer was given - please answer \"Y\" for yes or \"N\" for no*".upper())
            continue
        elif extra_liability != "Y" and extra_liability != "N":
            print()
            print("*Please answer \"Y\" for yes or \"N\" for no - try again*".upper())
            continue
        else:
            break

    while True:
        print()
        extra_glass_cov = input("Any extra glass coverage? [Y/N]: ").upper()
        if extra_glass_cov == "":
            print()
            print("*No answer was given - please answer \"Y\" for yes or \"N\" for no*".upper())
            continue
        elif extra_glass_cov != "Y" and extra_glass_cov != "N":
            print()
            print("*Please answer \"Y\" for yes or \"N\" for no - try again*".upper())
        else:
            break

    while True:
        print()
        loaner_car = input("Rent a loaner car? [Y/N]: ").upper()
        if loaner_car == "":
            print()
            print("*No answer was given - please answer \"Y\" for yes or \"N\" for no*".upper())
            continue
        elif loaner_car != "Y" and loaner_car != "N":
            print()
            print("*Please answer \"Y\" for yes or \"N\" for no - try again*".upper())
        else:
            break

    while True:
        print()
        print("Type \"F\" to pay in full or \"M\" to pay monthly...")
        pay_method = input("What method would you like to pay with? [F/M]: ").upper()
        if pay_method == "":
            print()
            print("*No answer was given - please answer \"F\" for yes or \"M\" for no*".upper())
            continue
        elif pay_method != "F" and pay_method != "M":
            print()
            print("*Please answer \"F\" for yes or \"M\" for no - try again*".upper())
        else:
            break

    # Processing calculations...
    insurPrem = PREM_RATE + ((num_cars - 1) * (PREM_RATE - (PREM_RATE * ADD_CAR_DIS)))

    # Extra Costs
    if extra_liability == "Y":
        liabilityCost = LIABILTY_COST
    else:
        liabilityCost = 0
    if extra_glass_cov == "Y":
        glassCovCost = GLASS_COST
    else:
        glassCovCost = 0
    if loaner_car == "Y":
        loanerCarCost = LOAN_CAR_COST
    else:
        loanerCarCost = 0
    # Extra Total
    extraCosts = liabilityCost + glassCovCost + loanerCarCost
    # "SubTotal"
    totalInsurPrem = insurPrem + extraCosts

    tax = totalInsurPrem * HST_RATE
    total = totalInsurPrem + tax

    monthlyPay = PROCESS_FEE + total / 12

    # Current Date
    policyDate = datetime.datetime.now()
    if policyDate.day >= 25:
        # First pay date for the 25th month or over.
        firstMonthlyPay = (policyDate.replace(day=1) + datetime.timedelta(days=64)).replace(day=1)
    else:
        # First pay date for any other day of the month.
        firstMonthlyPay = (policyDate.replace(day=1) + datetime.timedelta(days=32)).replace(day=1)

    # Formatting for Output
    poicyNumForm = str(POLICY_NUM) + "-" + first_name[0] + last_name[0]
    CPP_form = cus_city + ", " + cus_province + " " + cus_postal
    liabilityCostForm = f"${liabilityCost:,.2f}"
    glassCovCostForm = f"${glassCovCost:,.2f}"
    loanerCarCostForm = f"${loanerCarCost:,.2f}"
    insurPremForm = f"${insurPrem:,.2f}"
    extraCostsForm = f"${extraCosts:,.2f}"
    totalInsurPremForm = f"${totalInsurPrem:,.2f}"
    taxForm = f"${tax:,.2f}"
    totalForm = f"${total:,.2f}"
    monthlyPayForm = f"${monthlyPay:,.2f}"

    print()
    print(" "*2, " "*11 + "one stop insurance".title())
    print(" "*2, " "*12 + "customer receipt".title())
    print(" "*2, "="*40)
    print(" "*2, POLICY_NUM)
    print(" "*2, policyDate.strftime("%B %d, %Y"))
    print()
    print(" "*2, f"Client: {first_name} {last_name}")
    print(" "*2, f"        {street_add}")
    print(" "*2, f"        {CPP_form}")
    print(" "*2, "Phone #: " + cus_pnum)
    print(" "*2, f"Cars insured: {num_cars}")
    print(" "*2, "=" * 40)
    print(" "*2, f"Extra costs:")
    print(" "*2, f"   Liabilty:                  {liabilityCostForm:>10}")
    print(" "*2, f"   Glass coverage:            {glassCovCostForm:>10}")
    print(" "*2, f"   Loaner car:                {loanerCarCostForm:>10}")
    print(" "*2, "                               ---------")
    print(" "*2, f"Insurance Premium:            {insurPremForm:>10}")
    print(" "*2, f"Extra costs total:            {extraCostsForm:>10}")
    print(" " * 2, "                               ---------")
    print(" "*2, f"SubTotal:                     {totalInsurPremForm:>10}")
    print(" "*2, f"HST:                          {taxForm:>10}")
    print(" "*2, f"Policy total:                 {totalForm:>10}")
    print(" "*2, "="*40)
    print(" "*2, "For monthly payment customers:")
    print(" "*2, f"   Monthly payment:           {monthlyPayForm:>10}")
    print(" "*2, "   First payment date:         {}".format(firstMonthlyPay.strftime("%d-%b-%y")))
    print(" "*2, "="*40)
    print(" "*7, "ONE STOP - Insuring the world!")

    f = open("Policies.dat", "a")
    f.write("{}, ".format(str(POLICY_NUM)))
    f.write("{}, ".format(policyDate.strftime("%Y-%m-%d")))
    f.write("{}, ".format(first_name))
    f.write("{}, ".format(last_name))
    f.write("{}, ".format(street_add))
    f.write("{}, ".format(cus_city))
    f.write("{}, ".format(cus_province))
    f.write("{}, ".format(cus_postal))
    f.write("{}, ".format(cus_pnum))
    f.write("{}, ".format(str(num_cars)))
    f.write("{}, ".format(extra_liability))
    f.write("{}, ".format(extra_glass_cov))
    f.write("{}, ".format(loaner_car))
    f.write("{}, ".format(pay_method))
    f.write("{}\n".format(str(totalInsurPrem)))
    f.close()

    POLICY_NUM += 1

    print()
    print("Saving... ", end="")
    for wait in range(1, 11):
        print('*', end=' ')
        time.sleep(.2)

    print("...Information for {} is successfully saved.".format(first_name))
    print()
    print('Type "End" to quit...')
    contin = input("Press enter if you would like to run the program again: ").upper()
    if contin == "END":
        break
    else:
        pass

f = open('OSICDef.dat', 'w')
f.write("{}\n".format(str(POLICY_NUM)))
f.write("{}\n".format(str(PREM_RATE)))
f.write("{}\n".format(str(ADD_CAR_DIS)))
f.write("{}\n".format(str(LIABILTY_COST)))
f.write("{}\n".format(str(GLASS_COST)))
f.write("{}\n".format(str(LOAN_CAR_COST)))
f.write("{}\n".format(str(HST_RATE)))
f.write("{}\n".format(str(PROCESS_FEE)))
f.close()

# Detailed Report Start (Full)
print()
print("ONE STOP INSURANCE COMPANY")
print("MONTHLY PAYMENT LISTING AS OF {}".format(policyDate.strftime("%d-%m-%y")))
print()
print("POLICY CUSTOMER            INSURANCE      EXTRA       TOTAL")
print("NUMBER NAME                 PREMIUM       COSTS      PREMIUM")
print("="*60)

totalPol = 0
insurPremAcc = 0
extraCostsAcc = 0
totalInsurPremAcc = 0

f = open("Policies.dat", "r")

for custDataLine in f:
    custLine = custDataLine.split(",")
    POLICY_NUM = int(custLine[0].strip())
    first_name = custLine[2].strip()
    last_name = custLine[3].strip()
    num_cars = int(custLine[-6].strip())
    extra_liability = custLine[-5].strip()
    extra_glass_cov = custLine[-4].strip()
    loaner_car = custLine[-3].strip()
    totalInsurPrem = float(custLine[-1].strip())

    insurPrem = PREM_RATE + ((num_cars - 1) * (PREM_RATE - (PREM_RATE * ADD_CAR_DIS)))

    if extra_liability == "Y":
        liabilityCost = LIABILTY_COST
    else:
        liabilityCost = 0
    if extra_glass_cov == "Y":
        glassCovCost = GLASS_COST
    else:
        glassCovCost = 0
    if loaner_car == "Y":
        loanerCarCost = LOAN_CAR_COST
    else:
        loanerCarCost = 0
    extraCosts = liabilityCost + glassCovCost + loanerCarCost

    totalInsurPrem = insurPrem + extraCosts

    fullName = first_name + " " + last_name
    insurPremForm = f"${insurPrem:,.2f}"
    extraCostsForm = f"${extraCosts:,.2f}"
    totalInsurPremForm = f"${totalInsurPrem:,.2f}"

    print(f"{POLICY_NUM} {fullName:<20} {insurPremForm:>10}  {extraCostsForm:>10}  {totalInsurPremForm:>10}")

    totalPol += 1
    insurPremAcc += insurPrem
    extraCostsAcc += extraCosts
    totalInsurPremAcc += totalInsurPrem

f.close()

insurPremAccForm = f"${insurPremAcc:,.2f}"
extraCostsAccForm = f"${extraCostsAcc:,.2f}"
totalInsurPremAccForm = f"${totalInsurPremAcc:,.2f}"

print("="*60)
print(f"Total policies: {totalPol:<3}       {insurPremAccForm:>10}  {extraCostsAccForm:>10}  {totalInsurPremAccForm:>10}")
print()

# Exception Report Start (Monthly)
print()
print("ONE STOP INSURANCE COMPANY")
print("MONTHLY PAYMENT LISTING AS OF {}".format(policyDate.strftime("%d-%m-%y")))
print()
print("POLICY CUSTOMER              TOTAL                 TOTAL      MONTHLY")
print("NUMBER NAME                 PREMIUM      HST       COST       PAYMENT")
print("="*69)

totalPol = 0
totalInsurPremAcc = 0
taxAcc = 0
totalAcc = 0
monthlyPayAcc = 0

f = open("Policies.dat", "r")

for custDataLine in f:
    custLine = custDataLine.split(",")
    POLICY_NUM = int(custLine[0].strip())
    first_name = custLine[2].strip()
    last_name = custLine[3].strip()
    pay_method = custLine[-2].strip()
    totalInsurPrem = float(custLine[-1].strip())

    if pay_method == "M":
        PREM_RATE = 869.00
        HST_RATE = .15
        ADD_CAR_DIS = .25
        num_cars = 2
        PROCESS_FEE = 39.99
        tax = totalInsurPrem * HST_RATE
        total = totalInsurPrem + tax
        monthlyPay = PROCESS_FEE + total / 12

        fullName = first_name + " " + last_name
        totalInsurPremForm = f"${totalInsurPrem:,.2f}"
        taxForm = f"${tax:,.2f}"
        totalForm = f"${total:,.2f}"
        monthlyPayForm = f"${monthlyPay:,.2f}"

        print(f"{POLICY_NUM} {fullName:<20} {totalInsurPremForm:>10}  {taxForm:>8}  {totalForm:>10} {monthlyPayForm:>10}")

        totalPol += 1
        totalInsurPremAcc += totalInsurPrem
        taxAcc += tax
        totalAcc += total
        monthlyPayAcc += monthlyPay

f.close()

totalInsurPremAccForm = f"${totalInsurPremAcc:,.2f}"
taxAccForm = f"${taxAcc:,.2f}"
totalAccForm = f"${totalAcc:,.2f}"
monthlyPayAccForm = f"${monthlyPayAcc:,.2f}"

print("="*69)
print(f"Total policies: {totalPol:<3}       {totalInsurPremAccForm:>10}{taxAccForm:>10}  {totalAccForm:>10} {monthlyPayAccForm:>10}")
