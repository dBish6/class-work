package com.keyin.golf.json_data;

/* Add.java
   Class that changes/add a given value in json data
   Method that will edit member details (email, phone, and address)
   More to be added....

   Author: Dominic Whelan
   Contributors:  David Bishop, Chris Doucette and Blake Waddleton
   Creation Date: Oct 26, 2022

 */

import com.keyin.golf.Member;
import org.json.simple.JSONArray;
import org.json.simple.JSONObject;
import org.json.simple.parser.JSONParser;
import org.json.simple.parser.ParseException;

import java.io.FileReader;
import java.io.FileWriter;
import java.io.IOException;
import java.util.ArrayList;
import java.util.Objects;

public class Add {

    // Used to set personal data ( phone,email,address, upcoming/current/past tournaments )
    public static void setMemberDetailValue(int ID, String keyToChange, String valueToSet) {
        ArrayList<String> allowableKeys = new ArrayList<>();
        allowableKeys.add("name");
        allowableKeys.add("email");
        allowableKeys.add("phone");
        allowableKeys.add("address");
        allowableKeys.add("currentTournaments");
        allowableKeys.add("pastTournaments");
        allowableKeys.add("upcomingTournaments");
        if(!allowableKeys.contains(keyToChange)){
            System.out.println("ERROR - Invalid Entry for Key");
        }else {
            JSONParser jsonParser = new JSONParser();
            try (FileReader reader = new FileReader("src/main/golf.club.json/members.json")) {
                Object obj = jsonParser.parse(reader);
                JSONArray memberList = (JSONArray) obj;
                memberList.forEach(member -> {
                    JSONObject memberObj = (JSONObject) member;
                    JSONObject objDetails = (JSONObject) memberObj.get("member");
                    String membershipType = (String) objDetails.get("membershipType");
                    Long userInputId = Long.valueOf(ID);
                    if (Objects.equals(membershipType, "Family Plan")) {
                        JSONArray familyMembers = (JSONArray) objDetails.get("familyMembers");
                        familyMembers.forEach(fMember -> {
                            JSONObject fmObj = (JSONObject) fMember;
                            Long memberID = (Long) fmObj.get("memberID");
                            if (Objects.equals(memberID, userInputId)) {
                                fmObj.put(keyToChange, valueToSet);
                                try (FileWriter writer = new FileWriter("src/main/golf.club.json/members.json")) {
                                    writer.write(memberList.toJSONString());
                                } catch (IOException e) {
                                    e.printStackTrace();
                                }
                            }
                        });
                    } else {
                        Long memberID = (Long) objDetails.get("memberID");
                        if (Objects.equals(memberID, userInputId)) {
                            objDetails.put(keyToChange, valueToSet);
                            writeFile(memberList,"src/main/golf.club.json/members.json");
                        }
                    }
                });
            } catch (IOException | ParseException e) {
                e.printStackTrace();
            }
        }
    }

    public static void setMemberTournamentDetails(Member memberUpdate){

        JSONParser jsonParser = new JSONParser();
        try (FileReader reader = new FileReader("src/main/golf.club.json/members.json")) {
            Object obj = jsonParser.parse(reader);
            JSONArray memberList = (JSONArray) obj;
            memberList.forEach(member -> {
                JSONObject memberObj = (JSONObject) member;
                JSONObject objDetails = (JSONObject) memberObj.get("member");
                String membershipType = (String) objDetails.get("membershipType");
                if (Objects.equals(membershipType, "Family Plan")) {
                    JSONArray familyMembers = (JSONArray) objDetails.get("familyMembers");
                    familyMembers.forEach(fMember -> {
                        JSONObject fmObj = (JSONObject) fMember;
                        Long memberID = (Long) fmObj.get("memberID");
                        if (Objects.equals(memberID, memberUpdate.getMemberID())) {
                            fmObj.put("currentTournaments", memberUpdate.getCurrentTournaments());
                            fmObj.put("pastTournaments", memberUpdate.getPastTournaments());
                            fmObj.put("upcomingTournaments", memberUpdate.getUpcomingTournaments());
                            try (FileWriter writer = new FileWriter("src/main/golf.club.json/members.json")) {
                                writer.write(memberList.toJSONString());
                            } catch (IOException e) {
                                e.printStackTrace();
                            }
                        }

                    });
                } else {
                    Long memberID = (Long) objDetails.get("memberID");
                    if (Objects.equals(memberID, memberUpdate.getMemberID())) {
                        objDetails.put("currentTournaments", memberUpdate.getCurrentTournaments());
                        objDetails.put("pastTournaments", memberUpdate.getPastTournaments());
                        objDetails.put("upcomingTournaments", memberUpdate.getUpcomingTournaments());
                        writeFile(memberList, "src/main/golf.club.json/members.json");
                    }
                    }
                });

            } catch (IOException | ParseException e) {
                e.printStackTrace();
            }

    }

    public static void writeFile(JSONArray jsonArray, String fileName){
        try (FileWriter writer = new FileWriter(fileName)) {
            writer.write(jsonArray.toJSONString());
        } catch (IOException e) {
            e.printStackTrace();
        }
    }

}