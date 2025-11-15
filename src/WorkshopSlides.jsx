import URLQRCode from "./assets/URL QR Code.png";

import React, { useState } from 'react';
import { ChevronLeft, ChevronRight, Terminal, Database, Shield, Code, Brain, Lock } from 'lucide-react';

const WorkshopPresentation = () => {
  const [currentSlide, setCurrentSlide] = useState(0);

  const slides = [
    {
      title: "Day 2: Data Science & Cybersecurity",
      subtitle: "Bridging Intelligence and Security",
      icon: Brain,
      content: (
        <div className="text-center space-y-6">
          <div className="flex justify-center gap-12 mt-8">
            <div className="flex flex-col items-center">
              <Database className="w-20 h-20 text-blue-500 mb-3" />
              <p className="font-semibold text-lg">Data Science</p>
            </div>
            <div className="text-4xl text-gray-400">+</div>
            <div className="flex flex-col items-center">
              <Shield className="w-20 h-20 text-red-500 mb-3" />
              <p className="font-semibold text-lg">Cybersecurity</p>
            </div>
          </div>
          <p className="text-xl mt-8 text-gray-700">Duration: 2 Hours | Level: Beginner to Intermediate</p>
          <p className="text-lg text-gray-600">Speakers: [Your Names]</p>
        </div>
      )
    },
    {
      title: "Workshop Agenda",
      icon: Terminal,
      content: (
        <div className="space-y-4 text-lg">
          <div className="bg-blue-50 p-4 rounded-lg border-l-4 border-blue-500">
            <h3 className="font-bold text-xl mb-2">Part 1: Data Science Fundamentals (50 min)</h3>
            <ul className="ml-6 space-y-2">
              <li>• What is Data Science? Real-world applications</li>
              <li>• Data analysis pipeline & tools</li>
              <li>• Hands-on: Python data analysis with Pandas</li>
              <li>• Introduction to ML concepts</li>
            </ul>
          </div>
          <div className="bg-red-50 p-4 rounded-lg border-l-4 border-red-500">
            <h3 className="font-bold text-xl mb-2">Part 2: Cybersecurity Essentials (50 min)</h3>
            <ul className="ml-6 space-y-2">
              <li>• Cybersecurity landscape & common threats</li>
              <li>• Security principles & best practices</li>
              <li>• Hands-on: Basic penetration testing demo</li>
              <li>• Secure coding practices</li>
            </ul>
          </div>
          <div className="bg-purple-50 p-4 rounded-lg border-l-4 border-purple-500">
            <h3 className="font-bold text-xl mb-2">Part 3: The Intersection (20 min)</h3>
            <ul className="ml-6 space-y-2">
              <li>• AI in Cybersecurity & Security in Data Science</li>
              <li>• Career opportunities & Q&A</li>
            </ul>
          </div>
        </div>
      )
    },
    {
      title: "Part 1: What is Data Science?",
      icon: Database,
      content: (
        <div className="space-y-5">
          <p className="text-xl text-gray-700">Data Science = Statistics + Programming + Domain Knowledge</p>
          <div className="grid grid-cols-2 gap-4 mt-6">
            <div className="bg-gradient-to-br from-blue-100 to-blue-50 p-5 rounded-lg">
              <h4 className="font-bold text-lg mb-3 text-blue-900">Real-World Applications</h4>
              <ul className="space-y-2 text-gray-700">
                <li>🎬 Netflix: Recommendation systems</li>
                <li>🚗 Uber: Pricing & ETA prediction</li>
                <li>🏥 Healthcare: Disease prediction</li>
                <li>💳 Banking: Fraud detection</li>
                <li>🛒 E-commerce: Customer segmentation</li>
              </ul>
            </div>
            <div className="bg-gradient-to-br from-green-100 to-green-50 p-5 rounded-lg">
              <h4 className="font-bold text-lg mb-3 text-green-900">Key Skills Required</h4>
              <ul className="space-y-2 text-gray-700">
                <li>📊 Statistics & Probability</li>
                <li>🐍 Python/R Programming</li>
                <li>🧮 SQL & Database Management</li>
                <li>📈 Data Visualization</li>
                <li>🤖 Machine Learning basics</li>
              </ul>
            </div>
          </div>
          <div className="bg-yellow-50 border-l-4 border-yellow-500 p-4 mt-4">
            <p className="text-lg"><strong>Industry Fact:</strong> Data Scientists are among the top 3 most in-demand jobs globally!</p>
          </div>
        </div>
      )
    },
    {
      title: "The Data Science Pipeline",
      icon: Code,
      content: (
        <div className="space-y-4">
          <div className="flex items-center justify-between">
            <div className="bg-blue-500 text-white p-4 rounded-lg w-1/6 text-center">
              <p className="font-bold">1. Collect</p>
              <p className="text-sm mt-1">Data Sources</p>
            </div>
            <div className="text-2xl">→</div>
            <div className="bg-green-500 text-white p-4 rounded-lg w-1/6 text-center">
              <p className="font-bold">2. Clean</p>
              <p className="text-sm mt-1">Preprocessing</p>
            </div>
            <div className="text-2xl">→</div>
            <div className="bg-yellow-500 text-white p-4 rounded-lg w-1/6 text-center">
              <p className="font-bold">3. Explore</p>
              <p className="text-sm mt-1">EDA</p>
            </div>
            <div className="text-2xl">→</div>
            <div className="bg-purple-500 text-white p-4 rounded-lg w-1/6 text-center">
              <p className="font-bold">4. Model</p>
              <p className="text-sm mt-1">ML/AI</p>
            </div>
            <div className="text-2xl">→</div>
            <div className="bg-red-500 text-white p-4 rounded-lg w-1/6 text-center">
              <p className="font-bold">5. Deploy</p>
              <p className="text-sm mt-1">Production</p>
            </div>
          </div>
          <div className="bg-gray-50 p-5 rounded-lg mt-6">
            <h4 className="font-bold text-lg mb-3">Essential Python Libraries</h4>
            <div className="grid grid-cols-3 gap-4">
              <div className="bg-white p-3 rounded border-2 border-blue-200">
                <p className="font-bold text-blue-700">NumPy</p>
                <p className="text-sm">Numerical computing</p>
              </div>
              <div className="bg-white p-3 rounded border-2 border-green-200">
                <p className="font-bold text-green-700">Pandas</p>
                <p className="text-sm">Data manipulation</p>
              </div>
              <div className="bg-white p-3 rounded border-2 border-purple-200">
                <p className="font-bold text-purple-700">Matplotlib</p>
                <p className="text-sm">Visualization</p>
              </div>
              <div className="bg-white p-3 rounded border-2 border-red-200">
                <p className="font-bold text-red-700">Scikit-learn</p>
                <p className="text-sm">Machine Learning</p>
              </div>
              <div className="bg-white p-3 rounded border-2 border-yellow-200">
                <p className="font-bold text-yellow-700">Seaborn</p>
                <p className="text-sm">Statistical plots</p>
              </div>
              <div className="bg-white p-3 rounded border-2 border-indigo-200">
                <p className="font-bold text-indigo-700">TensorFlow</p>
                <p className="text-sm">Deep Learning</p>
              </div>
            </div>
          </div>
        </div>
      )
    },
    {
      title: "🔥 Hands-On: Data Analysis with Pandas",
      icon: Code,
      content: (
        <div className="space-y-4">
          <div className="bg-green-50 border-l-4 border-green-500 p-4">
            <p className="font-bold text-lg mb-2">Exercise: Analyze Student Performance Data</p>
            <p className="text-gray-700">We'll explore a dataset of student scores and extract insights!</p>
          </div>
          <div className="bg-gray-900 text-green-400 p-4 rounded-lg font-mono text-sm overflow-x-auto">
            <pre>{`# Import libraries
import pandas as pd
import matplotlib.pyplot as plt

# Load sample data
data = {
    'Name': ['Alice', 'Bob', 'Charlie', 'David', 'Eva'],
    'Math': [85, 72, 90, 65, 88],
    'Science': [78, 85, 82, 70, 92],
    'English': [92, 68, 75, 80, 85]
}
df = pd.DataFrame(data)

# Basic exploration
print(df.head())
print(df.describe())

# Calculate average score per student
df['Average'] = df[['Math', 'Science', 'English']].mean(axis=1)

# Find top performer
top_student = df.loc[df['Average'].idxmax()]
print(f"Top Performer: {top_student['Name']}")

# Visualize
df.plot(x='Name', y=['Math', 'Science', 'English'], kind='bar')
plt.title('Student Scores Comparison')
plt.show()`}</pre>
          </div>
          <div className="bg-blue-50 p-4 rounded-lg">
            <p className="font-bold mb-2">🎯 Try This Yourself:</p>
            <ul className="space-y-1 ml-4">
              <li>• Add more students and subjects</li>
              <li>• Find the subject with highest average score</li>
              <li>• Identify students who need improvement</li>
            </ul>
          </div>
        </div>
      )
    },
    {
      title: "Data Visualization: Telling Stories with Data",
      icon: Code,
      content: (
        <div className="space-y-5">
          <p className="text-xl text-gray-700">Data visualization transforms complex data into visual insights that anyone can understand</p>
          <div className="grid grid-cols-2 gap-4">
            <div className="bg-gradient-to-br from-blue-100 to-blue-50 p-5 rounded-lg">
              <h4 className="font-bold text-lg mb-3 text-blue-900">Why Visualize Data?</h4>
              <ul className="space-y-2 text-sm text-gray-700">
                <li>👁️ <strong>See patterns instantly</strong> that numbers hide</li>
                <li>📊 <strong>Compare trends</strong> across time periods</li>
                <li>🎯 <strong>Identify outliers</strong> and anomalies</li>
                <li>💡 <strong>Communicate insights</strong> to non-technical audiences</li>
                <li>⚡ <strong>Make faster decisions</strong> with visual evidence</li>
              </ul>
            </div>
            <div className="bg-gradient-to-br from-purple-100 to-purple-50 p-5 rounded-lg">
              <h4 className="font-bold text-lg mb-3 text-purple-900">Popular Chart Types</h4>
              <ul className="space-y-2 text-sm text-gray-700">
                <li>📈 <strong>Line Charts:</strong> Trends over time</li>
                <li>📊 <strong>Bar Charts:</strong> Comparing categories</li>
                <li>🥧 <strong>Pie Charts:</strong> Parts of a whole</li>
                <li>🔵 <strong>Scatter Plots:</strong> Relationships between variables</li>
                <li>🗺️ <strong>Heatmaps:</strong> Patterns in matrices</li>
                <li>📦 <strong>Box Plots:</strong> Distribution analysis</li>
              </ul>
            </div>
          </div>
          <div className="bg-gray-900 text-green-400 p-4 rounded-lg font-mono text-sm">
            <p className="text-white mb-2">Quick Example: Creating a Bar Chart</p>
            <pre>{`import matplotlib.pyplot as plt
import pandas as pd

# Sample data: Sales by region
data = {'Region': ['North', 'South', 'East', 'West'],
        'Sales': [45000, 38000, 52000, 41000]}
df = pd.DataFrame(data)

# Create bar chart
plt.figure(figsize=(10, 6))
plt.bar(df['Region'], df['Sales'], color=['blue', 'green', 'red', 'orange'])
plt.title('Sales by Region', fontsize=16, fontweight='bold')
plt.xlabel('Region')
plt.ylabel('Sales (₹)')
plt.grid(axis='y', alpha=0.3)
plt.show()`}</pre>
          </div>
          <div className="bg-yellow-50 border-l-4 border-yellow-500 p-4">
            <p className="font-bold mb-2">🎨 Best Practices:</p>
            <p className="text-sm text-gray-700">• Choose the right chart for your data • Keep it simple and clean • Use color purposefully • Label everything clearly • Remove unnecessary elements</p>
          </div>
        </div>
      )
    },
    {
      title: "Introduction to Machine Learning",
      icon: Brain,
      content: (
        <div className="space-y-5">
          <p className="text-xl text-gray-700">Machine Learning = Teaching computers to learn from data without explicit programming</p>
          <div className="grid grid-cols-3 gap-4">
            <div className="bg-blue-100 p-4 rounded-lg border-2 border-blue-500">
              <h4 className="font-bold text-lg mb-2 text-blue-900">Supervised Learning</h4>
              <p className="text-sm mb-3 text-gray-700">Learn from labeled data</p>
              <div className="text-sm space-y-1 text-gray-600">
                <p>Examples:</p>
                <p>• Email spam detection</p>
                <p>• House price prediction</p>
                <p>• Image classification</p>
              </div>
            </div>
            <div className="bg-green-100 p-4 rounded-lg border-2 border-green-500">
              <h4 className="font-bold text-lg mb-2 text-green-900">Unsupervised Learning</h4>
              <p className="text-sm mb-3 text-gray-700">Find patterns in unlabeled data</p>
              <div className="text-sm space-y-1 text-gray-600">
                <p>Examples:</p>
                <p>• Customer segmentation</p>
                <p>• Anomaly detection</p>
                <p>• Recommendation systems</p>
              </div>
            </div>
            <div className="bg-purple-100 p-4 rounded-lg border-2 border-purple-500">
              <h4 className="font-bold text-lg mb-2 text-purple-900">Reinforcement Learning</h4>
              <p className="text-sm mb-3 text-gray-700">Learn through trial & error</p>
              <div className="text-sm space-y-1 text-gray-600">
                <p>Examples:</p>
                <p>• Game playing (AlphaGo)</p>
                <p>• Robotics</p>
                <p>• Self-driving cars</p>
              </div>
            </div>
          </div>
          <div className="bg-gradient-to-r from-orange-100 to-red-100 p-5 rounded-lg mt-4">
            <h4 className="font-bold text-lg mb-3">Simple ML Example: Linear Regression</h4>
            <p className="text-gray-700">Predict house prices based on size → Draw a line through data points!</p>
            <div className="mt-3 bg-white p-3 rounded">
              <p className="font-mono text-sm">House Size (sqft) → Model → Predicted Price ($)</p>
              <p className="text-sm text-gray-600 mt-2">1000 sqft → $200,000 | 1500 sqft → $300,000 | 2000 sqft → $400,000</p>
            </div>
          </div>
        </div>
      )
    },
    {
      title: "Part 2: Welcome to Cybersecurity",
      icon: Shield,
      content: (
        <div className="space-y-5">
          <p className="text-xl text-gray-700">Cybersecurity = Protecting systems, networks, and data from digital attacks</p>
          <div className="bg-red-50 border-l-4 border-red-500 p-4">
            <h4 className="font-bold text-lg mb-2 text-red-900">Why Should You Care?</h4>
            <ul className="space-y-2 text-gray-700">
              <li>• 🚨 Cyberattacks occur every 39 seconds globally</li>
              <li>• 💰 Average cost of a data breach: $4.45 million (2023)</li>
              <li>• 📱 43% of cyberattacks target small businesses</li>
              <li>• 🔐 3.5 million unfilled cybersecurity jobs worldwide</li>
            </ul>
          </div>
          <div className="grid grid-cols-2 gap-4">
            <div className="bg-gradient-to-br from-blue-100 to-blue-50 p-4 rounded-lg">
              <h4 className="font-bold text-lg mb-3 text-blue-900">Common Threats</h4>
              <ul className="space-y-2 text-sm text-gray-700">
                <li>🦠 <strong>Malware:</strong> Viruses, ransomware, trojans</li>
                <li>🎣 <strong>Phishing:</strong> Fake emails/websites</li>
                <li>💉 <strong>SQL Injection:</strong> Database attacks</li>
                <li>🔓 <strong>DDoS:</strong> Overwhelming servers</li>
                <li>🕵️ <strong>Man-in-the-Middle:</strong> Intercepting data</li>
              </ul>
            </div>
            <div className="bg-gradient-to-br from-green-100 to-green-50 p-4 rounded-lg">
              <h4 className="font-bold text-lg mb-3 text-green-900">Security Domains</h4>
              <ul className="space-y-2 text-sm text-gray-700">
                <li>🔐 <strong>Network Security</strong></li>
                <li>☁️ <strong>Cloud Security</strong></li>
                <li>📱 <strong>Application Security</strong></li>
                <li>🛡️ <strong>Endpoint Security</strong></li>
                <li>👤 <strong>Identity & Access Management</strong></li>
              </ul>
            </div>
          </div>
        </div>
      )
    },
    {
      title: "The CIA Triad: Foundation of Security",
      icon: Lock,
      content: (
        <div className="space-y-6">
          <p className="text-lg text-center text-gray-700">Every security decision revolves around these three principles</p>
          <div className="grid grid-cols-3 gap-6">
            <div className="bg-gradient-to-br from-blue-500 to-blue-600 text-white p-6 rounded-lg shadow-lg">
              <h3 className="text-2xl font-bold mb-3 text-center">C</h3>
              <h4 className="text-xl font-bold mb-3">Confidentiality</h4>
              <p className="text-sm mb-3">Only authorized users can access data</p>
              <div className="bg-blue-400 bg-opacity-30 p-3 rounded text-sm">
                <p className="font-semibold mb-1">Examples:</p>
                <p>• Encryption</p>
                <p>• Access controls</p>
                <p>• Authentication</p>
              </div>
            </div>
            <div className="bg-gradient-to-br from-green-500 to-green-600 text-white p-6 rounded-lg shadow-lg">
              <h3 className="text-2xl font-bold mb-3 text-center">I</h3>
              <h4 className="text-xl font-bold mb-3">Integrity</h4>
              <p className="text-sm mb-3">Data remains accurate and unaltered</p>
              <div className="bg-green-400 bg-opacity-30 p-3 rounded text-sm">
                <p className="font-semibold mb-1">Examples:</p>
                <p>• Checksums</p>
                <p>• Digital signatures</p>
                <p>• Version control</p>
              </div>
            </div>
            <div className="bg-gradient-to-br from-purple-500 to-purple-600 text-white p-6 rounded-lg shadow-lg">
              <h3 className="text-2xl font-bold mb-3 text-center">A</h3>
              <h4 className="text-xl font-bold mb-3">Availability</h4>
              <p className="text-sm mb-3">Systems are accessible when needed</p>
              <div className="bg-purple-400 bg-opacity-30 p-3 rounded text-sm">
                <p className="font-semibold mb-1">Examples:</p>
                <p>• Redundancy</p>
                <p>• Backups</p>
                <p>• DDoS protection</p>
              </div>
            </div>
          </div>
          <div className="bg-yellow-50 border-l-4 border-yellow-500 p-4">
            <p className="font-bold">Real-World Scenario:</p>
            <p className="text-gray-700 mt-2">Banking App: Your account data must be <span className="font-bold text-blue-600">confidential</span> (encrypted), your balance must be <span className="font-bold text-green-600">accurate</span> (integrity), and you must be able to <span className="font-bold text-purple-600">access it 24/7</span> (availability).</p>
          </div>
        </div>
      )
    },
    {
      title: "🔥 Hands-On: Basic Security Testing",
      icon: Terminal,
      content: (
        <div className="space-y-4">
          <div className="bg-red-50 border-l-4 border-red-500 p-4">
            <p className="font-bold text-lg mb-2">Exercise: Password Security Analysis</p>
            <p className="text-gray-700">Let's build a simple password strength checker!</p>
          </div>
          <div className="bg-gray-900 text-green-400 p-4 rounded-lg font-mono text-sm overflow-x-auto">
            <pre>{`import re

def check_password_strength(password):
    score = 0
    feedback = []
    
    # Check length
    if len(password) >= 8:
        score += 1
    else:
        feedback.append("❌ Too short (min 8 chars)")
    
    # Check for uppercase
    if re.search(r'[A-Z]', password):
        score += 1
    else:
        feedback.append("❌ Add uppercase letters")
    
    # Check for lowercase
    if re.search(r'[a-z]', password):
        score += 1
    else:
        feedback.append("❌ Add lowercase letters")
    
    # Check for digits
    if re.search(r'\\d', password):
        score += 1
    else:
        feedback.append("❌ Add numbers")
    
    # Check for special chars
    if re.search(r'[!@#$%^&*]', password):
        score += 1
    else:
        feedback.append("❌ Add special characters")
    
    # Determine strength
    if score <= 2:
        strength = "Weak 😰"
    elif score <= 3:
        strength = "Medium 😐"
    else:
        strength = "Strong 💪"
    
    print(f"Password Strength: {strength}")
    print(f"Score: {score}/5")
    for item in feedback:
        print(item)

# Test it
check_password_strength("password123")
check_password_strength("Str0ng!Pass")`}</pre>
          </div>
          <div className="bg-blue-50 p-4 rounded-lg">
            <p className="font-bold mb-2">🎯 Try This:</p>
            <ul className="space-y-1 ml-4 text-sm">
              <li>• Test with your own passwords (use fake ones!)</li>
              <li>• Add check for common passwords dictionary</li>
              <li>• Calculate time to crack using brute force</li>
            </ul>
          </div>
        </div>
      )
    },
    {
      title: "Web Application Security & HTTPS",
      icon: Lock,
      content: (
        <div className="space-y-5">
          <p className="text-xl text-gray-700">Understanding how secure communication works on the web</p>
          <div className="grid grid-cols-2 gap-4">
            <div className="bg-red-50 p-5 rounded-lg border-l-4 border-red-500">
              <h4 className="font-bold text-lg mb-3 text-red-900">HTTP vs HTTPS</h4>
              <div className="space-y-3">
                <div className="bg-white p-3 rounded">
                  <p className="font-bold text-red-700">❌ HTTP (Not Secure)</p>
                  <p className="text-sm text-gray-700 mt-1">• Data sent in plain text</p>
                  <p className="text-sm text-gray-700">• Anyone can intercept and read</p>
                  <p className="text-sm text-gray-700">• No encryption</p>
                  <p className="text-sm text-gray-700">• Vulnerable to attacks</p>
                </div>
                <div className="bg-white p-3 rounded">
                  <p className="font-bold text-green-700">✅ HTTPS (Secure)</p>
                  <p className="text-sm text-gray-700 mt-1">• Encrypted communication</p>
                  <p className="text-sm text-gray-700">• SSL/TLS certificates</p>
                  <p className="text-sm text-gray-700">• Protected from eavesdropping</p>
                  <p className="text-sm text-gray-700">• Verified server identity</p>
                </div>
              </div>
            </div>
            <div className="bg-blue-50 p-5 rounded-lg border-l-4 border-blue-500">
              <h4 className="font-bold text-lg mb-3 text-blue-900">How HTTPS Works</h4>
              <div className="space-y-2 text-sm text-gray-700">
                <div className="bg-white p-3 rounded border-l-2 border-blue-400">
                  <p className="font-bold">1. Handshake</p>
                  <p>Browser and server exchange encryption keys</p>
                </div>
                <div className="bg-white p-3 rounded border-l-2 border-green-400">
                  <p className="font-bold">2. Authentication</p>
                  <p>Server proves identity with SSL certificate</p>
                </div>
                <div className="bg-white p-3 rounded border-l-2 border-purple-400">
                  <p className="font-bold">3. Encryption</p>
                  <p>All data encrypted before transmission</p>
                </div>
                <div className="bg-white p-3 rounded border-l-2 border-orange-400">
                  <p className="font-bold">4. Secure Transfer</p>
                  <p>Data travels safely between client-server</p>
                </div>
              </div>
            </div>
          </div>
          <div className="bg-gradient-to-r from-green-100 to-teal-100 p-5 rounded-lg">
            <h4 className="font-bold text-lg mb-3 text-green-900">🔒 Common Web Security Headers</h4>
            <div className="grid grid-cols-2 gap-3 text-sm">
              <div className="bg-white p-3 rounded">
                <p className="font-bold text-blue-700">Content-Security-Policy</p>
                <p className="text-gray-600">Prevents XSS attacks</p>
              </div>
              <div className="bg-white p-3 rounded">
                <p className="font-bold text-green-700">Strict-Transport-Security</p>
                <p className="text-gray-600">Forces HTTPS connections</p>
              </div>
              <div className="bg-white p-3 rounded">
                <p className="font-bold text-purple-700">X-Frame-Options</p>
                <p className="text-gray-600">Prevents clickjacking</p>
              </div>
              <div className="bg-white p-3 rounded">
                <p className="font-bold text-red-700">X-Content-Type-Options</p>
                <p className="text-gray-600">Stops MIME-type sniffing</p>
              </div>
            </div>
          </div>
          <div className="bg-yellow-50 border-l-4 border-yellow-500 p-4">
            <p className="font-bold text-lg mb-2">🛡️ Security Checklist for Developers</p>
            <div className="grid grid-cols-2 gap-2 text-sm text-gray-700">
              <p>✓ Always use HTTPS</p>
              <p>✓ Implement security headers</p>
              <p>✓ Keep dependencies updated</p>
              <p>✓ Validate all user inputs</p>
              <p>✓ Use secure cookies (HttpOnly, Secure)</p>
              <p>✓ Implement rate limiting</p>
              <p>✓ Enable CORS properly</p>
              <p>✓ Regular security audits</p>
            </div>
          </div>
        </div>
      )
    },
    {
      title: "Common Vulnerabilities & Attacks",
      icon: Shield,
      content: (
        <div className="space-y-4">
          <div className="grid grid-cols-2 gap-4">
            <div className="bg-red-100 p-4 rounded-lg border-l-4 border-red-600">
              <h4 className="font-bold text-lg mb-2 text-red-900">SQL Injection</h4>
              <p className="text-sm mb-2 text-gray-700">Attacker inserts malicious SQL code</p>
              <div className="bg-white p-2 rounded font-mono text-xs">
                <p className="text-red-600">SELECT * FROM users WHERE</p>
                <p className="text-red-600">user='admin' OR '1'='1'</p>
              </div>
              <p className="text-sm mt-2 text-green-700">✅ Defense: Use prepared statements</p>
            </div>
            <div className="bg-orange-100 p-4 rounded-lg border-l-4 border-orange-600">
              <h4 className="font-bold text-lg mb-2 text-orange-900">Cross-Site Scripting (XSS)</h4>
              <p className="text-sm mb-2 text-gray-700">Inject malicious scripts in web pages</p>
              <div className="bg-white p-2 rounded font-mono text-xs">
                <p className="text-orange-600">&lt;script&gt;steal_cookies()&lt;/script&gt;</p>
              </div>
              <p className="text-sm mt-2 text-green-700">✅ Defense: Input validation & sanitization</p>
            </div>
            <div className="bg-purple-100 p-4 rounded-lg border-l-4 border-purple-600">
              <h4 className="font-bold text-lg mb-2 text-purple-900">Brute Force Attack</h4>
              <p className="text-sm mb-2 text-gray-700">Try all password combinations</p>
              <div className="bg-white p-2 rounded text-xs">
                <p>password1, password2, password3...</p>
              </div>
              <p className="text-sm mt-2 text-green-700">✅ Defense: Rate limiting, strong passwords</p>
            </div>
            <div className="bg-blue-100 p-4 rounded-lg border-l-4 border-blue-600">
              <h4 className="font-bold text-lg mb-2 text-blue-900">Man-in-the-Middle</h4>
              <p className="text-sm mb-2 text-gray-700">Intercept communication between parties</p>
              <div className="bg-white p-2 rounded text-xs">
                <p>User → 🕵️ Attacker → Server</p>
              </div>
              <p className="text-sm mt-2 text-green-700">✅ Defense: HTTPS, VPN, encryption</p>
            </div>
          </div>
          <div className="bg-gradient-to-r from-yellow-100 to-orange-100 p-4 rounded-lg">
            <p className="font-bold text-lg mb-2">⚠️ OWASP Top 10</p>
            <p className="text-sm text-gray-700">The Open Web Application Security Project maintains a list of the top 10 most critical web application security risks. Always check: <span className="font-mono bg-white px-2 py-1 rounded">owasp.org/top10</span></p>
          </div>
        </div>
      )
    },
    {
      title: "Secure Coding Best Practices",
      icon: Code,
      content: (
        <div className="space-y-4">
          <div className="grid grid-cols-2 gap-4">
            <div className="bg-green-50 p-4 rounded-lg">
              <h4 className="font-bold text-lg mb-3 text-green-900">✅ DO's</h4>
              <ul className="space-y-2 text-sm text-gray-700">
                <li>✓ Validate all user inputs</li>
                <li>✓ Use parameterized queries</li>
                <li>✓ Implement proper authentication</li>
                <li>✓ Encrypt sensitive data</li>
                <li>✓ Keep software updated</li>
                <li>✓ Follow principle of least privilege</li>
                <li>✓ Log security events</li>
                <li>✓ Use HTTPS everywhere</li>
              </ul>
            </div>
            <div className="bg-red-50 p-4 rounded-lg">
              <h4 className="font-bold text-lg mb-3 text-red-900">❌ DON'Ts</h4>
              <ul className="space-y-2 text-sm text-gray-700">
                <li>✗ Store passwords in plain text</li>
                <li>✗ Trust user input blindly</li>
                <li>✗ Hard-code credentials</li>
                <li>✗ Expose sensitive error messages</li>
                <li>✗ Use deprecated libraries</li>
                <li>✗ Disable security features</li>
                <li>✗ Ignore security warnings</li>
                <li>✗ Copy-paste code without understanding</li>
              </ul>
            </div>
          </div>
          <div className="bg-gray-900 text-green-400 p-4 rounded-lg font-mono text-sm">
            <p className="text-white mb-2">Example: Secure Password Hashing in Python</p>
            <pre>{`import hashlib
import os

# WRONG ❌
password = "mypassword"
hashed = hashlib.md5(password.encode()).hexdigest()

# RIGHT ✅
import bcrypt
password = b"mypassword"
salt = bcrypt.gensalt()
hashed = bcrypt.hashpw(password, salt)

# Verify password
if bcrypt.checkpw(password, hashed):
    print("Password matches!")`}</pre>
          </div>
        </div>
      )
    },
    {
      title: "Part 3: The Intersection - AI + Security",
      icon: Brain,
      content: (
        <div className="space-y-5">
          <div className="grid grid-cols-2 gap-4">
            <div className="bg-gradient-to-br from-blue-500 to-purple-600 text-white p-5 rounded-lg">
              <h3 className="text-xl font-bold mb-3">AI in Cybersecurity</h3>
              <ul className="space-y-2 text-sm">
                <li>• <strong>Threat Detection:</strong> ML models identify anomalies in network traffic</li>
                <li>• <strong>Malware Analysis:</strong> AI classifies and detects new malware variants</li>
                <li>• <strong>Phishing Detection:</strong> NLP analyzes emails for suspicious content</li>
                <li>• <strong>Fraud Detection:</strong> Detect unusual transaction patterns</li>
                <li>• <strong>SIEM Enhancement:</strong> AI-powered Security Information and Event Management</li>
              </ul>
            </div>
            <div className="bg-gradient-to-br from-red-500 to-orange-600 text-white p-5 rounded-lg">
              <h3 className="text-xl font-bold mb-3">Security in Data Science</h3>
              <ul className="space-y-2 text-sm">
                <li>• <strong>Data Privacy:</strong> GDPR, anonymization, differential privacy</li>
                <li>• <strong>Model Security:</strong> Prevent adversarial attacks on ML models</li>
                <li>• <strong>Secure Data Pipelines:</strong> Encrypt data at rest and in transit</li>
                <li>• <strong>Access Control:</strong> Who can view sensitive datasets?</li>
                <li>• <strong>Audit Trails:</strong> Track data usage and model predictions</li>
              </ul>
            </div>
          </div>
          <div className="bg-yellow-50 border-l-4 border-yellow-500 p-4">
            <p className="font-bold text-lg mb-2">🔥 Hot Career Paths</p>
            <div className="grid grid-cols-3 gap-3 mt-3">
              <div className="bg-white p-3 rounded shadow">
                <p className="font-bold text-blue-700">Security Analyst</p>
                <p className="text-xs text-gray-600">$70k - $120k</p>
              </div>
              <div className="bg-white p-3 rounded shadow">
                <p className="font-bold text-green-700">Data Scientist</p>
                <p className="text-xs text-gray-600">$90k - $150k</p>
              </div>
              <div className="bg-white p-3 rounded shadow">
                <p className="font-bold text-purple-700">ML Security Engineer</p>
                <p className="text-xs text-gray-600">$120k - $180k</p>
              </div>
            </div>
          </div>
        </div>
      )
    },
    {
      title: "Real-World Use Case: Fraud Detection",
      icon: Shield,
      content: (
        <div className="space-y-4">
          <div className="bg-gradient-to-r from-purple-100 to-pink-100 p-5 rounded-lg">
            <h3 className="text-xl font-bold mb-3 text-purple-900">How Banks Use AI for Fraud Detection</h3>
            <div className="space-y-3 text-gray-700">
              <p><strong>Step 1:</strong> Collect transaction data (amount, location, time, merchant)</p>
              <p><strong>Step 2:</strong> Train ML model on historical fraud patterns</p>
              <p><strong>Step 3:</strong> Model predicts risk score for each transaction</p>
              <p><strong>Step 4:</strong> High-risk transactions trigger alerts or blocks</p>
            </div>
          </div>
          <div className="grid grid-cols-2 gap-4">
            <div className="bg-green-50 p-4 rounded-lg border-2 border-green-500">
              <h4 className="font-bold mb-2 text-green-900">✅ Normal Transaction</h4>
              <div className="text-sm space-y-1 text-gray-700">
                <p>• Amount: $50</p>
                <p>• Location: Home city</p>
                <p>• Time: 2 PM</p>
                <p>• Merchant: Grocery store</p>
                <p className="font-bold text-green-700 mt-2">Risk Score: 0.05 (Low)</p>
              </div>
            </div>
            <div className="bg-red-50 p-4 rounded-lg border-2 border-red-500">
              <h4 className="font-bold mb-2 text-red-900">❌ Suspicious Transaction</h4>
              <div className="text-sm space-y-1 text-gray-700">
                <p>• Amount: $5000</p>
                <p>• Location: Foreign country</p>
                <p>• Time: 3 AM</p>
                <p>• Merchant: Unknown website</p>
                <p className="font-bold text-red-700 mt-2">Risk Score: 0.92 (High) 🚨</p>
              </div>
            </div>
          </div>
          <div className="bg-blue-50 p-4 rounded-lg">
            <p className="font-bold mb-2">Key ML Techniques Used:</p>
            <p className="text-sm text-gray-700">• Anomaly Detection • Decision Trees • Neural Networks • Random Forest</p>
          </div>
        </div>
      )
    },
    {
      title: "Learning Resources & Next Steps",
      icon: Brain,
      content: (
        <div className="space-y-4">
          <div className="grid grid-cols-2 gap-4">
            <div className="bg-blue-50 p-5 rounded-lg">
              <h4 className="font-bold text-lg mb-3 text-blue-900">📊 Data Science Resources</h4>
              <ul className="space-y-2 text-sm text-gray-700">
                <li>• <strong>Kaggle:</strong> Practice with real datasets</li>
                <li>• <strong>Google Colab:</strong> Free Python notebooks</li>
                <li>• <strong>Coursera:</strong> Andrew Ng's ML course</li>
                <li>• <strong>DataCamp:</strong> Interactive Python tutorials</li>
                <li>• <strong>Fast.ai:</strong> Practical deep learning</li>
              </ul>
            </div>
            <div className="bg-red-50 p-5 rounded-lg">
              <h4 className="font-bold text-lg mb-3 text-red-900">🔐 Cybersecurity Resources</h4>
              <ul className="space-y-2 text-sm text-gray-700">
                <li>• <strong>TryHackMe:</strong> Hands-on hacking labs</li>
                <li>• <strong>HackTheBox:</strong> Pentesting challenges</li>
                <li>• <strong>OWASP:</strong> Web security guides</li>
                <li>• <strong>Cybrary:</strong> Free security courses</li>
                <li>• <strong>PortSwigger:</strong> Web security academy</li>
              </ul>
            </div>
          </div>
          <div className="bg-gradient-to-r from-green-100 to-teal-100 p-5 rounded-lg">
            <h4 className="font-bold text-lg mb-3 text-green-900">🎯 What You Should Do Next</h4>
            <ol className="space-y-2 text-gray-700 ml-6 list-decimal">
              <li>Practice the hands-on exercises we covered today</li>
              <li>Build a small project (analyze a dataset OR create a security tool)</li>
              <li>Join online communities (Reddit, Discord, Stack Overflow)</li>
              <li>Participate in Kaggle competitions or CTF challenges</li>
              <li>Consider certifications: CompTIA Security+, Google Data Analytics, etc.</li>
            </ol>
          </div>
          <div className="bg-purple-50 p-5 rounded-lg">
            <h4 className="font-bold text-lg mb-3 text-purple-900">💡 Pro Tips for Success</h4>
            <ul className="space-y-2 text-gray-700">
              <li>✓ Build projects, not just follow tutorials</li>
              <li>✓ Document your learning journey (GitHub, blog)</li>
              <li>✓ Network with professionals on LinkedIn</li>
              <li>✓ Stay updated with tech news and trends</li>
              <li>✓ Don't be afraid to fail - debugging is learning!</li>
            </ul>
          </div>
        </div>
      )
    },
    {
      title: "Q&A and Discussion",
      icon: Terminal,
      content: (
        <div className="space-y-6 text-center">
          <div className="text-6xl">💬</div>
          <h2 className="text-3xl font-bold text-gray-800">Questions & Answers</h2>
          <p className="text-xl text-gray-600">Let's discuss your ideas, doubts, and career aspirations!</p>
          <div className="grid grid-cols-3 gap-4 mt-8">
            <div className="bg-blue-100 p-4 rounded-lg">
              <p className="text-4xl mb-2">🚀</p>
              <p className="font-bold">Career Paths</p>
            </div>
            <div className="bg-green-100 p-4 rounded-lg">
              <p className="text-4xl mb-2">💻</p>
              <p className="font-bold">Project Ideas</p>
            </div>
            <div className="bg-purple-100 p-4 rounded-lg">
              <p className="text-4xl mb-2">🎓</p>
              <p className="font-bold">Learning Tips</p>
            </div>
          </div>
          <div className="bg-yellow-50 border-l-4 border-yellow-500 p-6 mt-8">
            <p className="text-lg font-bold mb-2">Stay Connected!</p>
            <p className="text-gray-700">Feel free to reach out to us for mentorship, project guidance, or career advice.</p>
            <p className="text-sm text-gray-600 mt-3">Email: [Your Email] | LinkedIn: [Your Profile]</p>
          </div>
        </div>
      )
    },
    {
  title: "Thank You!",
  icon: Brain,
  content: (
    <div className="space-y-8 text-center">
      <div className="text-7xl">🎉</div>
      <h2 className="text-4xl font-bold text-gray-800">
        Thank You for Your Attention!
      </h2>
      <p className="text-2xl text-gray-600">
        Keep Learning, Keep Building, Stay Secure!
      </p>

      <div className="grid grid-cols-2 gap-6 mt-8">
        <div className="bg-gradient-to-br from-blue-500 to-purple-600 text-white p-8 rounded-lg">
          <h3 className="text-2xl font-bold mb-4">Remember</h3>
          <p className="text-lg">
            Data is the new oil, but security is the refinery that makes it
            valuable.
          </p>
        </div>

        <div className="bg-gradient-to-br from-red-500 to-orange-600 text-white p-8 rounded-lg">
          <h3 className="text-2xl font-bold mb-4">Your Journey Starts Now</h3>
          <p className="text-lg">
            Every expert was once a beginner. Start small, think big, keep learning!
          </p>
        </div>
      </div>

      <div className="bg-green-50 p-6 rounded-lg mt-8">
        <p className="text-xl font-bold text-green-900 mb-2">📝 Workshop Feedback</p>
        <p className="text-gray-700">
          We’d love to hear your thoughts! Please share your feedback to help us improve.
        </p>

        {/* QR code */}
        <div className="flex justify-center mt-6">
          <img
            src={URLQRCode}
            alt="Feedback QR Code"
            className="w-40 h-40 object-contain rounded-lg shadow-md"
          />
        </div>
      </div>

      <div className="flex justify-center gap-8 mt-8 text-5xl">
        <span>👨‍💻</span>
        <span>🔐</span>
        <span>📊</span>
        <span>🚀</span>
      </div>
    </div>
  )
}

  ];

  const nextSlide = () => {
    setCurrentSlide((prev) => (prev + 1) % slides.length);
  };

  const prevSlide = () => {
    setCurrentSlide((prev) => (prev - 1 + slides.length) % slides.length);
  };

  const goToSlide = (index) => {
    setCurrentSlide(index);
  };

  const CurrentIcon = slides[currentSlide].icon;

  return (
    <div className="min-h-screen bg-gradient-to-br from-gray-50 to-gray-100 p-8">
      <div className="max-w-7xl mx-auto">
        {/* Header */}
        <div className="bg-white rounded-lg shadow-lg p-6 mb-6">
          <div className="flex items-center justify-between">
            <div className="flex items-center gap-3">
              <CurrentIcon className="w-10 h-10 text-blue-600" />
              <div>
                <h1 className="text-2xl font-bold text-gray-800">{slides[currentSlide].title}</h1>
                {slides[currentSlide].subtitle && (
                  <p className="text-gray-600">{slides[currentSlide].subtitle}</p>
                )}
              </div>
            </div>
            <div className="text-gray-600 font-semibold">
              Slide {currentSlide + 1} / {slides.length}
            </div>
          </div>
        </div>

        {/* Content */}
        <div className="bg-white rounded-lg shadow-lg p-8 mb-6 min-h-[500px]">
          {slides[currentSlide].content}
        </div>

        {/* Navigation */}
        <div className="flex items-center justify-between">
          <button
            onClick={prevSlide}
            disabled={currentSlide === 0}
            className="flex items-center gap-2 px-6 py-3 bg-blue-600 text-white rounded-lg hover:bg-blue-700 disabled:bg-gray-300 disabled:cursor-not-allowed transition-colors"
          >
            <ChevronLeft className="w-5 h-5" />
            Previous
          </button>

          {/* Slide Indicators */}
          <div className="flex gap-2">
            {slides.map((_, index) => (
              <button
                key={index}
                onClick={() => goToSlide(index)}
                className={`w-3 h-3 rounded-full transition-all ${
                  index === currentSlide
                    ? 'bg-blue-600 w-8'
                    : 'bg-gray-300 hover:bg-gray-400'
                }`}
              />
            ))}
          </div>

          <button
            onClick={nextSlide}
            disabled={currentSlide === slides.length - 1}
            className="flex items-center gap-2 px-6 py-3 bg-blue-600 text-white rounded-lg hover:bg-blue-700 disabled:bg-gray-300 disabled:cursor-not-allowed transition-colors"
          >
            Next
            <ChevronRight className="w-5 h-5" />
          </button>
        </div>

        {/* Keyboard shortcuts hint */}
        <div className="text-center mt-4 text-sm text-gray-500">
          💡 Tip: Use arrow keys ← → to navigate slides
        </div>
      </div>
    </div>
  );
};

// Add keyboard navigation
if (typeof window !== 'undefined') {
  document.addEventListener('keydown', (e) => {
    if (e.key === 'ArrowRight') {
      document.querySelector('button:last-of-type')?.click();
    } else if (e.key === 'ArrowLeft') {
      document.querySelector('button:first-of-type')?.click();
    }
  });
}

export default WorkshopPresentation;