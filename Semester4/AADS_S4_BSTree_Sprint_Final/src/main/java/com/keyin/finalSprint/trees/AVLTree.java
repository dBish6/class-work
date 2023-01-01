package com.keyin.finalSprint.trees;


import org.json.simple.JSONObject;

import java.io.FileWriter;
import java.io.IOException;
import java.util.ArrayList;

// Self-balancing binary search tree (BST).
public class AVLTree {
    public Node root;

    int height(Node N) {
        if (N == null)
            return 0;
        return N.height;
    }

    int max(int a, int b) {
        return (a > b) ? a : b;
    }

    Node rightRotate(Node y) {
        Node x = y.left;
        Node T2 = x.right;
        x.right = y;
        y.left = T2;
        y.height = max(height(y.left), height(y.right)) + 1;
        x.height = max(height(x.left), height(x.right)) + 1;
        return x;
    }

    Node leftRotate(Node x) {
        Node y = x.right;
        Node T2 = y.left;
        y.left = x;
        x.right = T2;
        x.height = max(height(x.left), height(x.right)) + 1;
        y.height = max(height(y.left), height(y.right)) + 1;
        return y;
    }

    // Get balance factor of a node.
    public int getBalanceFactor(Node N) {
        if (N == null)
            return 0;
        return height(N.left) - height(N.right);
    }

    // Display balance factor of a node.
    public String displayBalanceFactor(Node N) {
        int heightDifference = this.height(N.left) - this.height(N.right);
        switch (heightDifference) {
            case -2:
                return "Unbalanced to the right!";
            case -1:
                return "Slightly unbalanced to the right.";
            case 1:
                return "Slightly unbalanced to the left.";
            case 2:
                return "Unbalanced to the left!";
            default:
                return "Currently balanced:)";
        }
    }

    // Insert a node
    public Node insertNode(Node node, int item) {

        // Find the position and insert the node.
        if (node == null)
            return (new Node(item));
        if (item < node.item)
            node.left = insertNode(node.left, item);
        else if (item > node.item)
            node.right = insertNode(node.right, item);
        else
            return node;

        // Update the balance factor of each node
        // And, balance the tree.
        node.height = 1 + max(height(node.left), height(node.right));
        int balanceFactor = getBalanceFactor(node);
        if (balanceFactor > 1) {
            if (item < node.left.item) {
                return rightRotate(node);
            } else if (item > node.left.item) {
                node.left = leftRotate(node.left);
                return rightRotate(node);
            }
        }
        if (balanceFactor < -1) {
            if (item > node.right.item) {
                return leftRotate(node);
            } else if (item < node.right.item) {
                node.right = rightRotate(node.right);
                return leftRotate(node);
            }
        }
        return node;
    }

    Node nodeWithMinimumValue(Node node) {
        Node current = node;
        while (current.left != null)
            current = current.left;
        return current;
    }

    // Delete a node
    public Node deleteNode(Node root, int item) {

        // Find the node to be deleted and remove it
        if (root == null)
            return root;
        if (item < root.item)
            root.left = deleteNode(root.left, item);
        else if (item > root.item)
            root.right = deleteNode(root.right, item);
        else {
            if ((root.left == null) || (root.right == null)) {
                Node temp = null;
                if (temp == root.left)
                    temp = root.right;
                else
                    temp = root.left;
                if (temp == null) {
                    temp = root;
                    root = null;
                } else
                    root = temp;
            } else {
                Node temp = nodeWithMinimumValue(root.right);
                root.item = temp.item;
                root.right = deleteNode(root.right, temp.item);
            }
        }
        if (root == null)
            return root;

        // Update the balance factor of each node and balance the tree
        root.height = max(height(root.left), height(root.right)) + 1;
        int balanceFactor = getBalanceFactor(root);
        if (balanceFactor > 1) {
            if (getBalanceFactor(root.left) >= 0) {
                return rightRotate(root);
            } else {
                root.left = leftRotate(root.left);
                return rightRotate(root);
            }
        }
        if (balanceFactor < -1) {
            if (getBalanceFactor(root.right) <= 0) {
                return leftRotate(root);
            } else {
                root.right = rightRotate(root.right);
                return leftRotate(root);
            }
        }
        return root;
    }

    // Remove all nodes.
    public void removeAll() {
        root = null;
    }

    // Total number of nodes.
    private int getTotalNumberOfNodes(Node head) {
        if (head == null)
            return 0;
        else {
            int length = 1;
            length = length + getTotalNumberOfNodes(head.left);
            length = length + getTotalNumberOfNodes(head.right);
            return length;
        }
    }

    public int getTotalNumberOfNodes() {
        return getTotalNumberOfNodes(root);
    }

    private void inOrder(Node node) {
        if (node != null) {
            inOrder(node.left);
            System.out.print(node.item + " ");
            inOrder(node.right);
        }
    }

//    public void inorderTraversal() {
//        inOrder(root);
//    }

//    public Object inorderTraversal() {
//        Node result = null;
//        if(node != null){
//            result = inorder(node.leftChild, value);
//            if( result != null) return result;
//
//            if(node.value.equals(value)){
//                System.out.println(value + " was found at " + node);
//                return node;
//            }
//            result = inorder(node.rightChild, value);
//        }
//        return result;
//    }

    private void preOrder(Node node) {
        if (node != null) {
            System.out.print(node.item + " ");
            preOrder(node.left);
            preOrder(node.right);
        }
    }

    public void preOrderTraversal() {
        preOrder(root);
    }

    private void postOrder(Node node) {
        if (node != null) {
            postOrder(node.left);
            postOrder(node.right);
            System.out.print(node.item + " ");
        }
    }

    public void postOrderTraversal() {
        postOrder(root);
    }

    // Print the tree
    public void printTree(Node currPtr, String indent, boolean last) {
        if (currPtr != null) {
            System.out.print(indent);
            if (last) {
                System.out.print("R----");
                indent += "   ";
            } else {
                System.out.print("L----");
                indent += "|  ";
            }
            System.out.println(currPtr.item);
            printTree(currPtr.left, indent, false);
            printTree(currPtr.right, indent, true);
        }
    }

    public void saveTree(Node nodes) {
        System.out.println("Saving...");

        JSONObject treeObject = new JSONObject();
        ArrayList<Integer> nodeArr = new ArrayList<>();
        int index = 0;
//        nodes.inorderTraversal();

        if (nodes != null) {
            nodeArr.add(nodes.item);
            System.out.println(nodes.item);
            treeObject.put(index += 1, nodeArr);
            saveTree(nodes.right);
            saveTree(nodes.left);
            try (FileWriter writer = new FileWriter("src/main/java/com/keyin/finalSprint/trees.json")) {
                writer.write(treeObject.toJSONString());
                System.out.println("Saved Successfully.");
            } catch (IOException e) {
                e.printStackTrace();

            }
        }

//        saveTree(nodes);
    }
}

//    public void saveTree(Node node) {
//        System.out.println("Saving...");
//
//        try {
//            File file = new File("src/main/java/com/keyin/finalSprint/trees.txt");
//            FileOutputStream fos = new FileOutputStream(file);
//            if (file.exists()) {
//                if (node != null) {
//                    System.out.println(node.item);
//                    String a = String.valueOf(node.item);
//                    byte[] bytesArray = a.getBytes();
//
//                    fos.write(bytesArray);
//
//                    saveTree(node.right);
//                    saveTree(node.left);
//                    fos.close();
//
//                }
//            } else {
//                file.createNewFile();
//                if (node != null) {
//                    System.out.println(node.item);
//                    String a = String.valueOf(node.item);
//                    byte[] bytesArray = a.getBytes();
//
//                    fos.write(bytesArray);
//
//                    saveTree(node.right);
//                    saveTree(node.left);
//                    fos.close();
//
//                }
//            }
//
//        } catch (IOException e) {
//            e.printStackTrace();
//        }
//    }

//    public void saveTree(Node node) {
//        System.out.println("Saving...");
//
//        try {
//
//
//        } catch (IOException e) {
//            e.printStackTrace();
//        }
//    }
