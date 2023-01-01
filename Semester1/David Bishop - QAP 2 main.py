# Purpose: A program receipt based on yachts docked at the club.
# Author: David Bishop
# Date: Sept 28, 2021 | Completed: Oct 1, 2021

# My constants
EVEN_SITE_COST = 80.00  # Cost of site if the site number is even.
ODD_SITE_COST = 120.00  # Cost of site if the site number is odd.
ALT_MEMBER_COST = 5.00  # Alternate member cost per month.
SITE_CLEANING_COST = 50.00  # Optional site cleaning cost per month.
VID_SURVEILLANCE_COST = 35.00  # Optional Video Surveillance cost per month.
HST = 0.15  # The good ol' tax rate.
STAND_MEM_COST = 75.00  # Cost of the standard member.
EXEC_MEM_COST = 150.00  # Cost of the executive member.
PROCESS_FEE = 59.99  # Processing fee cost.
CANCEL_FEE_RATE = 0.6  # The cancellation fee rate.

# Input...
# Required Input Statements
print()
Inquiry = input('Please enter "Y" for Yes and "N" for No for the following... (Y/N): ').upper()
if Inquiry == "Y":
    print()
    print(' '*16, "*INFROMATION WILL BE DOCUMENTED*")
else:           # I tried to make a sense if the user inputs anything other then "Y" or "N" the program will fail.
    print()
    quit("  INVAlID RESPONSE")

print()
ClubMember = input("Are you a existing club member? (Y/N): ").upper()
if ClubMember == "N":
    print()
    quit("  CANNOT PROCEED")
elif ClubMember == "Y":
    pass
else:
    print()
    quit("  INPUT NOT RECOGNIZED")

print()
print('Please enter "S" for Standard and "E" for Executive...')
MembershipType = input("Current type of membership (S/E): ").upper()

print()
AltMemberStr = input("Would you like to add new members? (Y/N): ").upper()
if AltMemberStr == "Y":
    NumAltMem = int(input("Enter number of added members: "))
elif AltMemberStr == "N":
    pass
else:
    print()
    quit("  INPUT NOT RECOGNIZED")

print()
print("Processed with general info...")
SiteNum = int(input("Number of site: "))  # There are no sites greater then 100.
if SiteNum > 100:
    print()
    quit("  CANNOT PROCEED")
MemberName = input("Your first & last name: ")
MemStreetAdd = input("Enter street address: ")
MemCity = input("Enter city: ")
MemProvince = input("Enter province: ")
MemPostal = input("Enter postal code: ")
HomeNum = input("Enter home phone number: ")
CellNum = input("Enter cellular phone number: ")

print()
print("Optional Services...")
WeeklyClean = input("Weekly site cleaning? (Y/N): ").upper()
VideoSurveil = input("Video surveillance? (Y/N): ").upper()

# Processing...
# Required calculations for deductions.
EvenOdd = SiteNum % 2
if EvenOdd == 0:
    SiteCost = EVEN_SITE_COST
else:
    SiteCost = ODD_SITE_COST
AltMemCost = NumAltMem * ALT_MEMBER_COST
SiteCharge = SiteCost + AltMemCost

if WeeklyClean == "Y":
    CleanCharge = SITE_CLEANING_COST  # Only outputted if the user enters "Y"
else:
    CleanCharge = 0

if VideoSurveil == "Y":
    SurveilCharge = VID_SURVEILLANCE_COST
else:
    SurveilCharge = 0
ExtraCharges = CleanCharge + SurveilCharge

SubTotal = SiteCharge + ExtraCharges
Tax = SubTotal * HST
TotalMonCharge = SubTotal + Tax

if MembershipType == "S":
    MonthlyDues = STAND_MEM_COST
else:
    MonthlyDues = EXEC_MEM_COST
TotalMonFee = TotalMonCharge + MonthlyDues

TotalYearlyFee = TotalMonFee * 12
MonPayment = (TotalYearlyFee + PROCESS_FEE) / 12

CancelFee = (TotalMonCharge * 12) * CANCEL_FEE_RATE

# Formatting for Output
if MembershipType == "S":
    MembershipTypeStr = "Standard"
else:
    MembershipTypeStr = "Executive"

if WeeklyClean == "Y":
    WeeklyCleanStr = "Yes"
else:
    WeeklyCleanStr = "No"

if VideoSurveil == "Y":
    VideoSurveilStr = "Yes"
else:
    VideoSurveilStr = "No"
SiteChargeForm = f"${SiteCharge:,.2f}"
ExtraChargesForm = f"${ExtraCharges:,.2f}"
SubTotalForm = f"${SubTotal:,.2f}"
TaxForm = f"${Tax:,.2f}"
TotalMonChargeForm = f"${TotalMonCharge:,.2f}"
MonthlyDuesForm = f"${MonthlyDues:,.2f}"
TotalMonFeeForm = f"${TotalMonFee:,.2f}"
TotalYearlyFeeForm = f"${TotalYearlyFee:,.2f}"
MonPaymentForm = f"${MonPayment:,.2f}"
CancelFeeForm = f"${CancelFee:,.2f}"

# Output...
# Print statements for required output.
print()
print(' '*5, "St. John's Marina & Yacht Club")
print(' '*9, "Yearly Member Receipt")
print(' '*1, "--------------------------------------")
print()
print(' '*2, "Client Name and Address: ")
print()
print(' '*2, f"{MemberName}")
print(' '*2, f"{MemStreetAdd}")
print(' '*2, f"{MemCity}, {MemProvince}, {MemPostal}")
print()
print(' '*2, f"Phone: {HomeNum} (H)")
print(' '*2, f"       {CellNum} (C)")
print()
print(' '*2, f"Site #:M{SiteNum:} Member type: {MembershipTypeStr}")
print()
print(' '*2, f"Alternate members:               {NumAltMem:>3}")
print(' '*2, f"Weekly site cleaning:            {WeeklyCleanStr:>3}")
print(' '*2, f"Video Surveillance:              {VideoSurveilStr:>3}")
print()
print(' '*2, f"Site charge:              {SiteChargeForm:>10}")
print(' '*2, f"Extra charges:            {ExtraChargesForm:>10}")
print("                             ", '-'*9)
print(' '*2, f"Subtotal:                 {SubTotalForm:>10}")
print(' '*2, f"Sales tax (HST):          {TaxForm:>10}")
print("                             ", '-'*9)
print(' '*2, f"Total monthly charges:    {TotalMonChargeForm:>10}")
print(' '*2, f"Monthly dues:             {MonthlyDuesForm:>10}")
print("                             ", '-'*9)
print(' '*2, f"Total monthly fees:       {TotalMonFeeForm:>10}")
print(' '*2, f"Total yearly fees:        {TotalYearlyFeeForm:>10}")
print()
print(' '*2, f"Monthly payment:          {MonPaymentForm:>10}")
print()
print(' '*1, "--------------------------------------")
print()
print(' '*2, "Issued: 2010-09-05")
print(' '*2, "HST Reg No: 549-33-5849-4720-9885")
print()
print(' '*2, f"Cancellation fee:         {CancelFeeForm:>10}")