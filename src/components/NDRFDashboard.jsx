import React, { useState, useEffect } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { 
  AlertTriangle, 
  MapPin, 
  Clock, 
  Users, 
  Phone, 
  CheckCircle, 
  XCircle,
  Filter,
  Search,
  Bell,
  Navigation,
  Activity,
  Zap,
  Shield,
  Eye,
  UserCheck,
  Map,
  List
} from 'lucide-react';
import NDRFMap from './NDRFMap';

const NDRFDashboard = () => {
  const [alerts, setAlerts] = useState([]);
  const [filteredAlerts, setFilteredAlerts] = useState([]);
  const [selectedPriority, setSelectedPriority] = useState('all');
  const [selectedStatus, setSelectedStatus] = useState('all');
  const [searchTerm, setSearchTerm] = useState('');
  const [selectedAlert, setSelectedAlert] = useState(null);
  const [currentTime, setCurrentTime] = useState(new Date());
  const [viewMode, setViewMode] = useState('list'); // 'list' or 'map'

  // Mock emergency alerts data
  const mockAlerts = [
    {
      id: 1,
      title: "Flash Flood Alert - Mumbai Suburbs",
      description: "Heavy rainfall causing waterlogging in Andheri, Bandra, and surrounding areas. Multiple vehicles stranded.",
      location: { lat: 19.0760, lng: 72.8777, address: "Andheri, Mumbai, Maharashtra" },
      priority: "critical",
      status: "active",
      timestamp: new Date(Date.now() - 15 * 60000), // 15 minutes ago
      reportedBy: "Mumbai Control Room",
      affectedPeople: 500,
      teamsAssigned: 3,
      contactNumber: "+91-9876543210",
      category: "flood"
    },
    {
      id: 2,
      title: "Building Collapse Risk - Delhi",
      description: "Old residential building showing structural damage after recent earthquake. Evacuation required.",
      location: { lat: 28.6139, lng: 77.2090, address: "Karol Bagh, New Delhi" },
      priority: "high",
      status: "in-progress",
      timestamp: new Date(Date.now() - 45 * 60000), // 45 minutes ago
      reportedBy: "Delhi Fire Services",
      affectedPeople: 120,
      teamsAssigned: 2,
      contactNumber: "+91-9876543211",
      category: "structural"
    },
    {
      id: 3,
      title: "Landslide Warning - Himachal Pradesh",
      description: "Continuous rainfall triggering landslides on NH-3. Traffic disrupted, tourists stranded.",
      location: { lat: 32.2432, lng: 77.1892, address: "Shimla-Manali Highway, HP" },
      priority: "medium",
      status: "acknowledged",
      timestamp: new Date(Date.now() - 120 * 60000), // 2 hours ago
      reportedBy: "HP State Emergency",
      affectedPeople: 200,
      teamsAssigned: 1,
      contactNumber: "+91-9876543212",
      category: "landslide"
    },
    {
      id: 4,
      title: "Cyclone Approach - Odisha Coast",
      description: "Cyclonic storm approaching eastern coast. Fishermen advised to return, evacuation centers ready.",
      location: { lat: 20.2961, lng: 85.8245, address: "Puri, Odisha" },
      priority: "critical",
      status: "active",
      timestamp: new Date(Date.now() - 30 * 60000), // 30 minutes ago
      reportedBy: "IMD Bhubaneswar",
      affectedPeople: 10000,
      teamsAssigned: 5,
      contactNumber: "+91-9876543213",
      category: "cyclone"
    },
    {
      id: 5,
      title: "Forest Fire - Uttarakhand",
      description: "Wildfire spreading in forest areas near Nainital. Wildlife sanctuary at risk.",
      location: { lat: 29.3803, lng: 79.4636, address: "Nainital Forest Division, UK" },
      priority: "high",
      status: "resolved",
      timestamp: new Date(Date.now() - 180 * 60000), // 3 hours ago
      reportedBy: "Forest Department",
      affectedPeople: 50,
      teamsAssigned: 2,
      contactNumber: "+91-9876543214",
      category: "fire"
    }
  ];

  useEffect(() => {
    setAlerts(mockAlerts);
    setFilteredAlerts(mockAlerts);
    
    // Update time every minute
    const timeInterval = setInterval(() => {
      setCurrentTime(new Date());
    }, 60000);

    // Simulate real-time updates
    const updateInterval = setInterval(() => {
      setAlerts(prevAlerts => {
        const updatedAlerts = [...prevAlerts];
        // Randomly update an alert status or add new alert
        if (Math.random() > 0.7) {
          const randomIndex = Math.floor(Math.random() * updatedAlerts.length);
          const statuses = ['active', 'in-progress', 'acknowledged', 'resolved'];
          updatedAlerts[randomIndex] = {
            ...updatedAlerts[randomIndex],
            status: statuses[Math.floor(Math.random() * statuses.length)]
          };
        }
        return updatedAlerts;
      });
    }, 30000); // Update every 30 seconds

    return () => {
      clearInterval(timeInterval);
      clearInterval(updateInterval);
    };
  }, []);

  // Filter alerts based on priority, status, and search term
  useEffect(() => {
    let filtered = alerts;

    if (selectedPriority !== 'all') {
      filtered = filtered.filter(alert => alert.priority === selectedPriority);
    }

    if (selectedStatus !== 'all') {
      filtered = filtered.filter(alert => alert.status === selectedStatus);
    }

    if (searchTerm) {
      filtered = filtered.filter(alert => 
        alert.title.toLowerCase().includes(searchTerm.toLowerCase()) ||
        alert.location.address.toLowerCase().includes(searchTerm.toLowerCase())
      );
    }

    setFilteredAlerts(filtered);
  }, [alerts, selectedPriority, selectedStatus, searchTerm]);

  const getPriorityColor = (priority) => {
    switch (priority) {
      case 'critical': return 'bg-red-500';
      case 'high': return 'bg-orange-500';
      case 'medium': return 'bg-yellow-500';
      case 'low': return 'bg-green-500';
      default: return 'bg-gray-500';
    }
  };

  const getStatusColor = (status) => {
    switch (status) {
      case 'active': return 'text-red-400 bg-red-900/20';
      case 'in-progress': return 'text-orange-400 bg-orange-900/20';
      case 'acknowledged': return 'text-yellow-400 bg-yellow-900/20';
      case 'resolved': return 'text-green-400 bg-green-900/20';
      default: return 'text-gray-400 bg-gray-900/20';
    }
  };

  const getCategoryIcon = (category) => {
    switch (category) {
      case 'flood': return <Activity className="w-4 h-4" />;
      case 'fire': return <Zap className="w-4 h-4" />;
      case 'structural': return <Shield className="w-4 h-4" />;
      case 'cyclone': return <Navigation className="w-4 h-4" />;
      case 'landslide': return <AlertTriangle className="w-4 h-4" />;
      default: return <Bell className="w-4 h-4" />;
    }
  };

  const formatTime = (date) => {
    const now = new Date();
    const diff = Math.floor((now - date) / 60000); // difference in minutes
    
    if (diff < 1) return 'Just now';
    if (diff < 60) return `${diff}m ago`;
    if (diff < 1440) return `${Math.floor(diff / 60)}h ago`;
    return `${Math.floor(diff / 1440)}d ago`;
  };

  const handleAlertAction = (alertId, action) => {
    setAlerts(prevAlerts => 
      prevAlerts.map(alert => 
        alert.id === alertId 
          ? { ...alert, status: action }
          : alert
      )
    );
  };

  const activeAlerts = alerts.filter(alert => alert.status === 'active').length;
  const inProgressAlerts = alerts.filter(alert => alert.status === 'in-progress').length;
  const totalAffected = alerts.reduce((sum, alert) => sum + alert.affectedPeople, 0);
  const totalTeams = alerts.reduce((sum, alert) => sum + alert.teamsAssigned, 0);

  return (
    <div className="min-h-screen bg-gradient-to-br from-slate-900 via-blue-900 to-slate-800 text-white">
      {/* Header */}
      <div className="bg-slate-800/50 backdrop-blur-sm border-b border-slate-700">
        <div className="max-w-7xl mx-auto px-4 py-4">
          <div className="flex flex-col md:flex-row justify-between items-start md:items-center gap-4">
            <div>
              <h1 className="text-2xl md:text-3xl font-bold text-white mb-2">
                NDRF Command Center
              </h1>
              <p className="text-slate-300 text-sm">
                National Disaster Response Force • Emergency Operations Dashboard
              </p>
            </div>
            <div className="text-right">
              <div className="text-lg font-mono text-blue-300">
                {currentTime.toLocaleTimeString()}
              </div>
              <div className="text-sm text-slate-400">
                {currentTime.toLocaleDateString()}
              </div>
            </div>
          </div>
        </div>
      </div>

      <div className="max-w-7xl mx-auto px-4 py-6">
        {/* Stats Overview */}
        <div className="grid grid-cols-2 md:grid-cols-4 gap-4 mb-6">
          <motion.div 
            className="bg-red-900/30 border border-red-500/30 rounded-lg p-4"
            whileHover={{ scale: 1.02 }}
          >
            <div className="flex items-center justify-between">
              <div>
                <p className="text-red-300 text-sm font-medium">Active Alerts</p>
                <p className="text-2xl font-bold text-red-400">{activeAlerts}</p>
              </div>
              <AlertTriangle className="w-8 h-8 text-red-400" />
            </div>
          </motion.div>
          
          <motion.div 
            className="bg-orange-900/30 border border-orange-500/30 rounded-lg p-4"
            whileHover={{ scale: 1.02 }}
          >
            <div className="flex items-center justify-between">
              <div>
                <p className="text-orange-300 text-sm font-medium">In Progress</p>
                <p className="text-2xl font-bold text-orange-400">{inProgressAlerts}</p>
              </div>
              <Activity className="w-8 h-8 text-orange-400" />
            </div>
          </motion.div>
          
          <motion.div 
            className="bg-blue-900/30 border border-blue-500/30 rounded-lg p-4"
            whileHover={{ scale: 1.02 }}
          >
            <div className="flex items-center justify-between">
              <div>
                <p className="text-blue-300 text-sm font-medium">People Affected</p>
                <p className="text-2xl font-bold text-blue-400">{totalAffected.toLocaleString()}</p>
              </div>
              <Users className="w-8 h-8 text-blue-400" />
            </div>
          </motion.div>
          
          <motion.div 
            className="bg-green-900/30 border border-green-500/30 rounded-lg p-4"
            whileHover={{ scale: 1.02 }}
          >
            <div className="flex items-center justify-between">
              <div>
                <p className="text-green-300 text-sm font-medium">Teams Deployed</p>
                <p className="text-2xl font-bold text-green-400">{totalTeams}</p>
              </div>
              <Shield className="w-8 h-8 text-green-400" />
            </div>
          </motion.div>
        </div>

        {/* View Mode Toggle and Filters */}
        <div className="bg-slate-800/50 rounded-lg p-4 mb-6">
          <div className="flex flex-col md:flex-row gap-4 items-start md:items-center">
            {/* View Mode Toggle */}
            <div className="flex items-center gap-2">
              <div className="flex bg-slate-700 rounded-lg p-1">
                <button
                  onClick={() => setViewMode('list')}
                  className={`flex items-center gap-2 px-3 py-2 rounded-md text-sm font-medium transition-colors ${
                    viewMode === 'list' 
                      ? 'bg-blue-600 text-white' 
                      : 'text-slate-300 hover:text-white hover:bg-slate-600'
                  }`}
                >
                  <List className="w-4 h-4" />
                  List View
                </button>
                <button
                  onClick={() => setViewMode('map')}
                  className={`flex items-center gap-2 px-3 py-2 rounded-md text-sm font-medium transition-colors ${
                    viewMode === 'map' 
                      ? 'bg-blue-600 text-white' 
                      : 'text-slate-300 hover:text-white hover:bg-slate-600'
                  }`}
                >
                  <Map className="w-4 h-4" />
                  Map View
                </button>
              </div>
            </div>
            
            <div className="flex items-center gap-2">
              <Filter className="w-5 h-5 text-slate-400" />
              <span className="text-sm font-medium text-slate-300">Filters:</span>
            </div>
            
            <div className="flex flex-wrap gap-2">
              <select
                value={selectedPriority}
                onChange={(e) => setSelectedPriority(e.target.value)}
                className="bg-slate-700 border border-slate-600 rounded px-3 py-1 text-sm text-white"
              >
                <option value="all">All Priorities</option>
                <option value="critical">Critical</option>
                <option value="high">High</option>
                <option value="medium">Medium</option>
                <option value="low">Low</option>
              </select>
              
              <select
                value={selectedStatus}
                onChange={(e) => setSelectedStatus(e.target.value)}
                className="bg-slate-700 border border-slate-600 rounded px-3 py-1 text-sm text-white"
              >
                <option value="all">All Status</option>
                <option value="active">Active</option>
                <option value="in-progress">In Progress</option>
                <option value="acknowledged">Acknowledged</option>
                <option value="resolved">Resolved</option>
              </select>
            </div>
            
            <div className="flex-1 max-w-md">
              <div className="relative">
                <Search className="absolute left-3 top-1/2 transform -translate-y-1/2 w-4 h-4 text-slate-400" />
                <input
                  type="text"
                  placeholder="Search alerts..."
                  value={searchTerm}
                  onChange={(e) => setSearchTerm(e.target.value)}
                  className="w-full bg-slate-700 border border-slate-600 rounded pl-10 pr-4 py-2 text-sm text-white placeholder-slate-400"
                />
              </div>
            </div>
          </div>
        </div>

        {/* Content Area - List or Map View */}
        {viewMode === 'list' ? (
          <>
            {/* Alerts List */}
            <div className="grid gap-4">
              <AnimatePresence>
                {filteredAlerts.map((alert) => (
                  <motion.div
                    key={alert.id}
                    initial={{ opacity: 0, y: 20 }}
                    animate={{ opacity: 1, y: 0 }}
                    exit={{ opacity: 0, y: -20 }}
                    className="bg-slate-800/50 border border-slate-700 rounded-lg overflow-hidden hover:bg-slate-800/70 transition-colors"
                  >
                    <div className="p-4">
                      <div className="flex flex-col md:flex-row justify-between items-start gap-4">
                        {/* Alert Info */}
                        <div className="flex-1">
                          <div className="flex items-center gap-3 mb-2">
                            <div className={`w-3 h-3 rounded-full ${getPriorityColor(alert.priority)}`} />
                            <span className="text-xs font-medium text-slate-400 uppercase tracking-wide">
                              {alert.category}
                            </span>
                            <span className={`text-xs px-2 py-1 rounded-full font-medium ${getStatusColor(alert.status)}`}>
                              {alert.status.replace('-', ' ')}
                            </span>
                          </div>
                          
                          <h3 className="text-lg font-semibold text-white mb-2">
                            {alert.title}
                          </h3>
                          
                          <p className="text-slate-300 text-sm mb-3 line-clamp-2">
                            {alert.description}
                          </p>
                          
                          <div className="grid grid-cols-1 md:grid-cols-3 gap-4 text-sm">
                            <div className="flex items-center gap-2 text-slate-400">
                              <MapPin className="w-4 h-4" />
                              <span className="truncate">{alert.location.address}</span>
                            </div>
                            <div className="flex items-center gap-2 text-slate-400">
                              <Clock className="w-4 h-4" />
                              <span>{formatTime(alert.timestamp)}</span>
                            </div>
                            <div className="flex items-center gap-2 text-slate-400">
                              <Users className="w-4 h-4" />
                              <span>{alert.affectedPeople} affected</span>
                            </div>
                          </div>
                        </div>
                        
                        {/* Actions */}
                        <div className="flex flex-col gap-2">
                          {alert.status === 'active' && (
                            <button
                              onClick={() => handleAlertAction(alert.id, 'acknowledged')}
                              className="bg-yellow-600 hover:bg-yellow-700 text-white px-3 py-1 rounded text-sm font-medium transition-colors flex items-center gap-1"
                            >
                              <Eye className="w-4 h-4" />
                              Acknowledge
                            </button>
                          )}
                          {alert.status === 'acknowledged' && (
                            <button
                              onClick={() => handleAlertAction(alert.id, 'in-progress')}
                              className="bg-orange-600 hover:bg-orange-700 text-white px-3 py-1 rounded text-sm font-medium transition-colors flex items-center gap-1"
                            >
                              <UserCheck className="w-4 h-4" />
                              Assign Team
                            </button>
                          )}
                          {alert.status === 'in-progress' && (
                            <button
                              onClick={() => handleAlertAction(alert.id, 'resolved')}
                              className="bg-green-600 hover:bg-green-700 text-white px-3 py-1 rounded text-sm font-medium transition-colors flex items-center gap-1"
                            >
                              <CheckCircle className="w-4 h-4" />
                              Mark Resolved
                            </button>
                          )}
                          
                          <button
                            onClick={() => setSelectedAlert(alert)}
                            className="bg-blue-600 hover:bg-blue-700 text-white px-3 py-1 rounded text-sm font-medium transition-colors"
                          >
                            View Details
                          </button>
                        </div>
                      </div>
                    </div>
                  </motion.div>
                ))}
              </AnimatePresence>
            </div>

            {filteredAlerts.length === 0 && (
              <div className="text-center py-12">
                <AlertTriangle className="w-12 h-12 text-slate-400 mx-auto mb-4" />
                <p className="text-slate-400 text-lg">No alerts found matching your criteria</p>
              </div>
            )}
          </>
        ) : (
          /* Map View */
          <div className="h-[600px] rounded-lg overflow-hidden">
            <NDRFMap 
              alerts={filteredAlerts} 
              selectedAlert={selectedAlert}
              onAlertSelect={setSelectedAlert}
              className="h-full"
            />
          </div>
        )}
      </div>

      {/* Alert Detail Modal */}
      <AnimatePresence>
        {selectedAlert && (
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            className="fixed inset-0 bg-black/50 backdrop-blur-sm z-50 flex items-center justify-center p-4"
            onClick={() => setSelectedAlert(null)}
          >
            <motion.div
              initial={{ scale: 0.9, opacity: 0 }}
              animate={{ scale: 1, opacity: 1 }}
              exit={{ scale: 0.9, opacity: 0 }}
              className="bg-slate-800 rounded-lg max-w-2xl w-full max-h-[90vh] overflow-y-auto"
              onClick={(e) => e.stopPropagation()}
            >
              <div className="p-6">
                <div className="flex justify-between items-start mb-4">
                  <div className="flex items-center gap-3">
                    {getCategoryIcon(selectedAlert.category)}
                    <h2 className="text-xl font-bold text-white">{selectedAlert.title}</h2>
                  </div>
                  <button
                    onClick={() => setSelectedAlert(null)}
                    className="text-slate-400 hover:text-white"
                  >
                    <XCircle className="w-6 h-6" />
                  </button>
                </div>
                
                <div className="grid grid-cols-1 md:grid-cols-2 gap-4 mb-4">
                  <div className="bg-slate-700/50 rounded p-3">
                    <p className="text-slate-400 text-sm mb-1">Priority</p>
                    <div className="flex items-center gap-2">
                      <div className={`w-3 h-3 rounded-full ${getPriorityColor(selectedAlert.priority)}`} />
                      <span className="text-white font-medium capitalize">{selectedAlert.priority}</span>
                    </div>
                  </div>
                  
                  <div className="bg-slate-700/50 rounded p-3">
                    <p className="text-slate-400 text-sm mb-1">Status</p>
                    <span className={`text-sm px-2 py-1 rounded font-medium ${getStatusColor(selectedAlert.status)}`}>
                      {selectedAlert.status.replace('-', ' ')}
                    </span>
                  </div>
                </div>
                
                <div className="mb-4">
                  <p className="text-slate-400 text-sm mb-2">Description</p>
                  <p className="text-white">{selectedAlert.description}</p>
                </div>
                
                <div className="grid grid-cols-1 md:grid-cols-2 gap-4 mb-4">
                  <div>
                    <p className="text-slate-400 text-sm mb-1">Location</p>
                    <p className="text-white flex items-center gap-2">
                      <MapPin className="w-4 h-4" />
                      {selectedAlert.location.address}
                    </p>
                  </div>
                  
                  <div>
                    <p className="text-slate-400 text-sm mb-1">Reported By</p>
                    <p className="text-white">{selectedAlert.reportedBy}</p>
                  </div>
                </div>
                
                <div className="grid grid-cols-1 md:grid-cols-3 gap-4 mb-6">
                  <div className="bg-slate-700/50 rounded p-3 text-center">
                    <p className="text-slate-400 text-sm">Affected People</p>
                    <p className="text-xl font-bold text-white">{selectedAlert.affectedPeople}</p>
                  </div>
                  
                  <div className="bg-slate-700/50 rounded p-3 text-center">
                    <p className="text-slate-400 text-sm">Teams Assigned</p>
                    <p className="text-xl font-bold text-white">{selectedAlert.teamsAssigned}</p>
                  </div>
                  
                  <div className="bg-slate-700/50 rounded p-3 text-center">
                    <p className="text-slate-400 text-sm">Contact</p>
                    <p className="text-white flex items-center justify-center gap-1">
                      <Phone className="w-4 h-4" />
                      <span className="text-sm">{selectedAlert.contactNumber}</span>
                    </p>
                  </div>
                </div>
                
                <div className="flex gap-3 justify-end">
                  <button
                    onClick={() => setSelectedAlert(null)}
                    className="bg-slate-600 hover:bg-slate-700 text-white px-4 py-2 rounded font-medium transition-colors"
                  >
                    Close
                  </button>
                  <button 
                    onClick={() => {
                      setViewMode('map');
                      setSelectedAlert(null);
                    }}
                    className="bg-blue-600 hover:bg-blue-700 text-white px-4 py-2 rounded font-medium transition-colors"
                  >
                    View on Map
                  </button>
                </div>
              </div>
            </motion.div>
          </motion.div>
        )}
      </AnimatePresence>
    </div>
  );
};

export default NDRFDashboard;