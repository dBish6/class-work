# Sprint Week #1 Program
# David Bishop, Terence Martin-Ferraro, Jacob Pritchett
# Nov 15, 2021

def simpleIPOprogram():

    # Constants
    DAILY_RATE = 35.00
    KM_RATE = 0.10
    HST = 0.15

    # Nice Headings
    print()
    print("   A worm welcome from the edsel car rental company!".title())
    print("Please enter the following information for your receipt".title())
    print()

    # Inputs...
    CarRentDays = int(input("Enter the number the days the car has been rented: "))
    MileageStart = int(input("Enter the mileage at the start of the rental: "))
    MileageStop = int(input("Enter the mileage at the end of the rental: "))
    CustFirstName = input("Enter the customers first name: ")
    CustLastName = input("Enter the customers last name: ")
    CustPhoneNum = input("Enter the customers Phone Number (XXX-XXX-XXXX): ")

    # Calculations
    TotKm = MileageStop - MileageStart
    DailyCost = CarRentDays * DAILY_RATE
    MileageCost = TotKm * KM_RATE
    RentCost = DailyCost + MileageCost
    HST = DailyCost * HST
    TotalRentCost = DailyCost + MileageCost + RentCost + HST

    # Formatting for Output
    DailyCostForm = f"${DailyCost:,.2f}"
    MileageCostForm = f"${MileageCost:,.2f}"
    RentCostForm = f"${RentCost:,.2f}"
    HSTform = f"${HST:,.2f}"
    TotalRentCostForm = f"${TotalRentCost:,.2f}"

    # Output...
    print()
    print("       Edsel Car Rental Company")
    print("           Rental Receipt ")
    print()
    print("Rented to: ")
    print(CustFirstName.title(), CustLastName.title())
    print(CustPhoneNum)
    print()
    print("Rental Details:")
    print()
    print(f"Total Kilometers:  {TotKm}km")
    print()
    print(f"Daily Cost:            {DailyCostForm:>10}")
    print(f"Mileage Cost:          {MileageCostForm:>10}")
    print(f"Rental Cost:           {RentCostForm:>10}")
    print(" " * 22, "_" * 10)
    print(f"HST:                   {HSTform:>10}")
    print(f"Total Cost:            {TotalRentCostForm:>10}")
    print()
    print(" Thanks for renting Edsel Cars !")

    print()
    input("Press any key to continue...")

def ifAndLoopSample():

    print()
    for numbers in range(1, 101):
        if numbers % 8 == 0 and numbers % 5 == 0:
            print("FizzBuzz")
        elif numbers % 8 == 0:
            print("Buzz")
        else:
            pass

        print(numbers)

    print()
    input("Press any key to continue...")

def stringsAndDates():

    # Inputs...
    import datetime

    while True:
        print()
        FName = input("Enter the employee first name: ")
        if FName == "":
            print()
            print("Invalid name – Cannot be blank – Try again.")
        else:
            break

    while True:
        print()
        LName = input("Enter the employee last name: ")
        if LName == "":
            print()
            print("Invalid name – Cannot be blank – Try again.")
        else:
            break

    while True:
        print()
        try:
            StartDate = input("Enter employee start date (YYYY-MM-DD): ")
            StartDate = datetime.datetime.strptime(StartDate, "%Y-%m-%d")
        except:
            print()
            print("Invalid start date.. Must be YYYY-MM-DD")
        else:
            break

    while True:
        print()
        try:
            Birthday = input("Enter employee birthday (YYYY-MM-DD): ")
            Birthday = datetime.datetime.strptime(Birthday, "%Y-%m-%d")
        except:
            print()
            print("Invalid birthday date... Must be YYYY-MM-DD")
        else:
            break

    print()
    YearSal = float(input("Enter employees yearly salary: "))

    # Calculations
    EmpNum = FName.upper()[0] + LName.upper()[0] + "-" + datetime.datetime.strftime(StartDate,"%Y") + "-" + datetime.datetime.strftime(Birthday, "%m")

    RevDate = StartDate + datetime.timedelta(days=365)
    Today = datetime.datetime.now()
    Till_Bday = Birthday - Today
    if Today > Birthday:
        Till_Bday = Birthday - Today + datetime.timedelta(days=365)

    GroupInsuranceEligibility = StartDate + datetime.timedelta(days=90)
    DaysTillInsStarts = GroupInsuranceEligibility - Today

    ProbationEndDate = StartDate + datetime.timedelta(days=120)
    DaysTillProbEnds = ProbationEndDate - Today

    # Output...
    print()
    print(FName.title(), LName.title())
    print()
    print("{}. {}".format(FName.title()[0], LName.title()))
    print()
    print("{}, {}".format(LName.title(), FName.title()[0]))
    print()
    print("Number of days until next birthday: {}".format(Till_Bday.days))
    print()
    print("Employee Number: {}".format(EmpNum))
    print()
    print("Employee's Next Review Date: {}".format(RevDate.strftime("%Y-%m-%d")))
    print()
    print("Date when group insurance starts: {}".format(GroupInsuranceEligibility.strftime("%b %d, %Y")))
    print("# of days until group insurance starts: {}".format(DaysTillInsStarts.days))
    print()
    print("Date when probation period ends: {}".format(ProbationEndDate.strftime("%b %d, %Y")))
    print("# of days until probation period ends: {}".format(DaysTillProbEnds.days))

    print()
    input("Press any key to continue...")

def dataFilesAndDefaultValues():

    # Reads Constants into variables.
    f = open('ECRDef.dat', 'r')
    RENTAL_NUM = int(f.readline())
    DAILY_RATE = float(f.readline())
    KM_RATE = float(f.readline())
    HST = float(f.readline())

    while True:
        # Nice Headings
        print()
        print("   A worm welcome from the edsel car rental company!".title())
        print("Please enter the following information for your receipt".title())
        print()

        # Inputs...
        print("Type a \"0\" to end the program...")
        CarRentDays = int(input("Enter the number the days the car has been rented: "))
        if CarRentDays == 0:
            break
        MileageStart = int(input("Enter the mileage at the start of the rental: "))
        MileageStop = int(input("Enter the mileage at the end of the rental: "))
        CustFirstName = input("Enter the customers first name: ")
        CustLastName = input("Enter the customers last name: ")
        CustPhoneNum = input("Enter the customers Phone Number (XXX-XXX-XXXX): ")

        # Calculations
        TotKm = MileageStop - MileageStart
        DailyCost = CarRentDays * DAILY_RATE
        MileageCost = TotKm * KM_RATE
        RentCost = DailyCost + MileageCost
        HST = DailyCost * HST
        TotalRentCost = DailyCost + MileageCost + RentCost + HST

        # Formatting for Output
        TotKmForm = f"{TotKm}km"
        DailyCostForm = f"${DailyCost:,.2f}"
        MileageCostForm = f"${MileageCost:,.2f}"
        RentCostForm = f"${RentCost:,.2f}"
        HSTform = f"${HST:,.2f}"
        TotalRentCostForm = f"${TotalRentCost:,.2f}"

        # Output...
        print()
        print("       Edsel Car Rental Company")
        print("           Rental Receipt ")
        print()
        print("Rented to:", CustFirstName.title(), CustLastName.title())
        print(" " * 11 + CustPhoneNum)
        print()
        print("Rental Details:")
        print()
        print(f"Total Kilometers:  {TotKmForm}")
        print()
        print(f"Daily Cost:            {DailyCostForm:>10}")
        print(f"Mileage Cost:          {MileageCostForm:>10}")
        print(f"Rental Cost:           {RentCostForm:>10}")
        print(" " * 22, "_" * 10)
        print(f"HST:                   {HSTform:>10}")
        print(f"Total Cost:            {TotalRentCostForm:>10}")
        print()
        print(" Thanks for renting Edsel Cars !")

        # Writes the values to a file for future reference.
        f = open('Rentals.dat', 'a')
        f.write("{}, ".format(str(RENTAL_NUM)))
        f.write("{}, ".format(str(CarRentDays)))
        f.write("{}, ".format(str(MileageStart)))
        f.write("{}, ".format(str(MileageStop)))
        f.write("{}, ".format(str(TotKm)))
        f.write("{}, ".format(str(DailyCostForm)))
        f.write("{}, ".format(str(MileageCostForm)))
        f.write("{}, ".format(str(RentCostForm)))
        f.write("{}, ".format(str(HSTform)))
        f.write("{}\n".format(str(TotalRentCostForm)))
        f.close()

        RENTAL_NUM += 1

        print()
        print("... Rental information has been saved")

    f = open("ECRDef.dat", "w")
    f.write("{}\n".format(RENTAL_NUM))
    f.write("{}\n".format(DAILY_RATE))
    f.write("{}\n".format(KM_RATE))
    f.write("{}\n".format(HST))
    f.close()

    print()
    input("Press any key to continue...")

def quitProgram():
    print()
    print('Type "Yes" to quit...')
    contin = input("Are you sure you would like to exit? (Any key to back out): ").upper()
    if contin == "YES":
        quit()
    else:
        pass

# Main Program
while True:
    print()
    print("The Sprint Project Company")
    print()
    print("1. Simple IPO Program.")
    print("2. IF and Loop Sample.")
    print("3. Strings and Dates.")
    print("4. Data files and Default Values.")
    print("5. Quit Program.")
    print()

    while True:
        try:
            print()
            choice = int(input("Enter choice (1-5): "))
        except ValueError:
            print()
            print("*Invalid choice - must be 1 though 5*".upper())
        else:
            if choice < 1 or choice > 5:
                print()
                print("*Invalid choice - cannot exceed 5 or be less then 1*".upper())
            else:
                break

    if choice == 1:
        simpleIPOprogram()
    elif choice == 2:
        ifAndLoopSample()
    elif choice == 3:
        stringsAndDates()
    elif choice == 4:
        dataFilesAndDefaultValues()
    else:
        quitProgram()
