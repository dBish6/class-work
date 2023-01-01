package com.keyin.finalSprint.trees;

import org.junit.jupiter.api.AfterAll;
import org.junit.jupiter.api.BeforeAll;
import org.junit.jupiter.api.Test;

import org.junit.jupiter.api.Assertions;
import org.mockito.Mock;
import org.mockito.Mockito;

public class AVLTreeTest {

    @Mock
    static AVLTree binaryTreeMock;

    @BeforeAll
    public static void before() {
        binaryTreeMock = new AVLTree();
        System.out.println("Test(s) start...");
    }

    @Test // Tests creating a tree
    public void createTreeTest() {
        System.out.println("*Running: createTreeTest()*\n");
        binaryTreeMock.root = binaryTreeMock.insertNode(binaryTreeMock.root, 33);
        Assertions.assertEquals( 33, binaryTreeMock.root.item);
        binaryTreeMock.root = binaryTreeMock.insertNode(binaryTreeMock.root, 13);
        Assertions.assertEquals( 2, binaryTreeMock.getTotalNumberOfNodes());
        binaryTreeMock.root = binaryTreeMock.insertNode(binaryTreeMock.root, 53);
        Assertions.assertEquals( 3, binaryTreeMock.getTotalNumberOfNodes());
        binaryTreeMock.root = binaryTreeMock.insertNode(binaryTreeMock.root, 9);
        Assertions.assertEquals( 4, binaryTreeMock.getTotalNumberOfNodes());
        binaryTreeMock.root = binaryTreeMock.insertNode(binaryTreeMock.root, 21);
        Assertions.assertEquals( 5, binaryTreeMock.getTotalNumberOfNodes());
        binaryTreeMock.root = binaryTreeMock.insertNode(binaryTreeMock.root, 61);
        Assertions.assertEquals( 6, binaryTreeMock.getTotalNumberOfNodes());
        binaryTreeMock.root = binaryTreeMock.insertNode(binaryTreeMock.root, 8);
        Assertions.assertEquals( 7, binaryTreeMock.getTotalNumberOfNodes());
        binaryTreeMock.root = binaryTreeMock.insertNode(binaryTreeMock.root, 11);
        Assertions.assertEquals( 8, binaryTreeMock.getTotalNumberOfNodes());
        Assertions.assertNotNull(binaryTreeMock.root);
        binaryTreeMock.printTree(binaryTreeMock.root, "", true);

        binaryTreeMock.root = binaryTreeMock.deleteNode(binaryTreeMock.root, 13);
        Assertions.assertEquals( 7, binaryTreeMock.getTotalNumberOfNodes());
        System.out.println("\nAfter Deletion of 13: ");
        binaryTreeMock.printTree(binaryTreeMock.root, "", true);

    }

    @AfterAll
    public static void after() {
        System.out.println("\nTests ended.");
    }
}
