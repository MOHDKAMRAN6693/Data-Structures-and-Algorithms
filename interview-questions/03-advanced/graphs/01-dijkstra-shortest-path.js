/**
 * Dijkstra's Shortest Path Algorithm
 * 
 * Problem: Find the shortest path from a source vertex to all other vertices
 * in a weighted graph with non-negative edge weights.
 * 
 * Time Complexity: O((V + E) log V) with binary heap
 * Space Complexity: O(V)
 */

class PriorityQueue {
    constructor() {
        this.heap = [];
    }
    
    enqueue(vertex, distance) {
        this.heap.push({ vertex, distance });
        this.heap.sort((a, b) => a.distance - b.distance);
    }
    
    dequeue() {
        return this.heap.shift();
    }
    
    isEmpty() {
        return this.heap.length === 0;
    }
}

class Graph {
    constructor(vertices) {
        this.vertices = vertices;
        this.adjacencyList = new Map();
        
        for (let i = 0; i < vertices; i++) {
            this.adjacencyList.set(i, []);
        }
    }
    
    addEdge(source, destination, weight) {
        this.adjacencyList.get(source).push({ destination, weight });
        // For undirected graph, add reverse edge
        this.adjacencyList.get(destination).push({ destination: source, weight });
    }
}

function dijkstra(graph, source) {
    const distances = new Array(graph.vertices).fill(Infinity);
    const previous = new Array(graph.vertices).fill(null);
    const visited = new Set();
    
    distances[source] = 0;
    const pq = new PriorityQueue();
    pq.enqueue(source, 0);
    
    while (!pq.isEmpty()) {
        const { vertex: current, distance } = pq.dequeue();
        
        if (visited.has(current)) continue;
        visited.add(current);
        
        const neighbors = graph.adjacencyList.get(current);
        
        for (const { destination, weight } of neighbors) {
            if (visited.has(destination)) continue;
            
            const newDistance = distance + weight;
            
            if (newDistance < distances[destination]) {
                distances[destination] = newDistance;
                previous[destination] = current;
                pq.enqueue(destination, newDistance);
            }
        }
    }
    
    return { distances, previous };
}

function getShortestPath(previous, source, destination) {
    const path = [];
    let current = destination;
    
    while (current !== null) {
        path.unshift(current);
        current = previous[current];
    }
    
    return path[0] === source ? path : [];
}

// Test case
console.log("=== Dijkstra's Algorithm Test ===");
const graph = new Graph(6);

// Add edges: (source, destination, weight)
graph.addEdge(0, 1, 4);
graph.addEdge(0, 2, 2);
graph.addEdge(1, 2, 1);
graph.addEdge(1, 3, 5);
graph.addEdge(2, 3, 8);
graph.addEdge(2, 4, 10);
graph.addEdge(3, 4, 2);
graph.addEdge(3, 5, 6);
graph.addEdge(4, 5, 3);

const source = 0;
const { distances, previous } = dijkstra(graph, source);

console.log("Shortest distances from vertex", source, ":");
for (let i = 0; i < graph.vertices; i++) {
    console.log(`Vertex ${i}: ${distances[i]}`);
}

console.log("\nShortest paths:");
for (let i = 1; i < graph.vertices; i++) {
    const path = getShortestPath(previous, source, i);
    console.log(`Path to ${i}: ${path.join(' -> ')}`);
}

/**
 * Applications:
 * 1. GPS navigation systems
 * 2. Network routing protocols
 * 3. Social network analysis
 * 4. Game AI pathfinding
 * 5. Resource allocation
 * 
 * Interview Tips:
 * 1. Explain the algorithm step by step
 * 2. Discuss time and space complexity
 * 3. Handle edge cases (negative weights, disconnected graphs)
 * 4. Compare with other shortest path algorithms
 * 5. Discuss optimization techniques
 */
