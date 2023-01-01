package com.keyin.finalSprint.ui;

import com.keyin.finalSprint.trees.AVLTree;
import com.keyin.finalSprint.trees.Node;

import java.text.ParseException;
import java.util.Scanner;

public class CLI {

    private static final String TEXT_GREEN = "\u001B[32m";
    private static final String TEXT_YELLOW = "\u001B[33m";
    private static final String TEXT_RESET = "\u001B[0m";

    public static void main(String[] args) {

        System.out.println(TEXT_GREEN + """              
                    ___     ___       _____                 ____                           _                ______ _____ ______ \s
                   / \\ \\   / / |     |_   _| __ ___  ___   / ___| ___ _ __   ___ _ __ __ _| |_ ___  _ __   / / __ )_   _/ ___\\ \\\s
                  / _ \\ \\ / /| |       | || '__/ _ \\/ _ \\ | |  _ / _ \\ '_ \\ / _ \\ '__/ _` | __/ _ \\| '__| | ||  _ \\ | | \\___ \\| |
                 / ___ \\ V / | |___    | || | |  __/  __/ | |_| |  __/ | | |  __/ | | (_| | || (_) | |    | || |_) || |  ___) | |
                /_/   \\_\\_/  |_____|   |_||_|  \\___|\\___|  \\____|\\___|_| |_|\\___|_|  \\__,_|\\__\\___/|_|    | ||____/ |_| |____/| |
                                                                                                           \\_\\               /_/\s
                                                                          """.indent(1));

        AVLTree binaryTree = new AVLTree();
        Scanner input = new Scanner(System.in);
        boolean quit = false;
        while (!quit) {
            System.out.println();
            System.out.println(TEXT_GREEN + "\t1. " + TEXT_YELLOW + "Insert a Node");
            System.out.println(TEXT_GREEN + "\t2. " + TEXT_YELLOW + "Delete a Node");
            System.out.println(TEXT_GREEN + "\t3. " + TEXT_YELLOW + "Get Balance Factor");
            System.out.println(TEXT_GREEN + "\t4. " + TEXT_YELLOW + "Display Nodes in Order");
            System.out.println(TEXT_GREEN + "\t5. " + TEXT_YELLOW + "Display Nodes in Pre Order");
            System.out.println(TEXT_GREEN + "\t6. " + TEXT_YELLOW + "Display Nodes in Post Order");
            System.out.println(TEXT_GREEN + "\t7. " + TEXT_YELLOW + "Total Number of Nodes");
            System.out.println(TEXT_GREEN + "\t8. " + TEXT_YELLOW + "Remove all Nodes");
            System.out.println(TEXT_GREEN + "\t9. " + TEXT_YELLOW + "Display Tree!");
            System.out.println(TEXT_GREEN + "\t10. " + TEXT_YELLOW + "Save Tree");
            System.out.println(TEXT_GREEN + "\t- " + TEXT_YELLOW + "\"q\" to Quit");
            System.out.print(TEXT_GREEN + "\tEnter your desired choice: " + TEXT_RESET);
            switch (input.next()) {
                case "1":
                    System.out.println(TEXT_YELLOW + "\n*Insert Node*");
                    System.out.print(TEXT_GREEN + "Enter a number to insert: " + TEXT_RESET);
                    int userInsertNode = input.nextInt();
                    binaryTree.root = binaryTree.insertNode(binaryTree.root, userInsertNode);
                    break;
                case "2":
                    System.out.println();
                    System.out.println(TEXT_YELLOW + "\n*Delete Node*");
                    System.out.print(TEXT_GREEN + "Enter a number to insert: " + TEXT_RESET);
                    int userDeleteNode = input.nextInt();
                    binaryTree.root = binaryTree.deleteNode(binaryTree.root, userDeleteNode);
                    break;
                case "3":
                    System.out.println(TEXT_YELLOW + "\n*Balance Factor*" + TEXT_RESET);
                    System.out.println(binaryTree.displayBalanceFactor(binaryTree.root));
                    break;
                case "4":
                    System.out.println(TEXT_YELLOW + "\n*Nodes in Order*" + TEXT_RESET);
//                  // TODO: Need new line?
                    // binaryTree.inorderTraversal();
                    break;
                case "5":
                    System.out.println(TEXT_YELLOW + "\n*Nodes Pre Order*" + TEXT_RESET);
                    binaryTree.preOrderTraversal();
                    break;
                case "6":
                    System.out.println(TEXT_YELLOW + "\n*Nodes Post Order*" + TEXT_RESET);
                    binaryTree.postOrderTraversal();
                    break;
                case "7":
                    System.out.println(TEXT_YELLOW + "\n*Total Nodes*");
                    System.out.println(binaryTree.getTotalNumberOfNodes());
                    break;
                case "8":
                    System.out.println(TEXT_YELLOW + "\n*Remove All Nodes*");
                    System.out.println(TEXT_GREEN + "Removing...");
                    binaryTree.removeAll();
                    System.out.println("Success" + TEXT_RESET);
                    break;
                case "9":
                    System.out.println();
                    binaryTree.printTree(binaryTree.root, "", true);
                    break;
                case "10":
                    System.out.println();
                    binaryTree.saveTree(binaryTree.root);
                    break;
                case "q":
                    System.out.println(TEXT_GREEN + "\nQuiting...");
                    quit = true;
                    break;
                default:
                    System.err.println("""
                            ERROR: Please choose from the list from 1 to 10.
                             Proceed with you choice below..""");
            }
        }
    }
}
