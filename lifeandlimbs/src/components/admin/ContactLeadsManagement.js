'use client'

import { useState, useEffect } from 'react'
import {
  Box,
  Typography,
  Table,
  TableBody,
  TableCell,
  TableContainer,
  TableHead,
  TableRow,
  Paper,
  Chip,
  Button,
  Dialog,
  DialogTitle,
  DialogContent,
  DialogActions,
  Select,
  MenuItem,
  FormControl,
  InputLabel,
  Pagination,
  IconButton,
  Tooltip,
  Card,
  CardContent,
  Grid,
  TextField,
  Alert
} from '@mui/material'
import {
  Visibility as ViewIcon,
  Edit as EditIcon,
  Delete as DeleteIcon,
  Email as EmailIcon,
  Phone as PhoneIcon,
  Refresh as RefreshIcon,
  FilterList as FilterIcon
} from '@mui/icons-material'

const ContactLeadsManagement = () => {
  const [leads, setLeads] = useState([])
  const [loading, setLoading] = useState(true)
  const [selectedLead, setSelectedLead] = useState(null)
  const [viewDialogOpen, setViewDialogOpen] = useState(false)
  const [editDialogOpen, setEditDialogOpen] = useState(false)
  const [statusFilter, setStatusFilter] = useState('all')
  const [currentPage, setCurrentPage] = useState(1)
  const [totalPages, setTotalPages] = useState(1)
  const [totalLeads, setTotalLeads] = useState(0)
  const [error, setError] = useState('')
  const [success, setSuccess] = useState('')

  const statusOptions = [
    { value: 'all', label: 'All Status', color: 'default' },
    { value: 'new', label: 'New', color: 'primary' },
    { value: 'contacted', label: 'Contacted', color: 'warning' },
    { value: 'resolved', label: 'Resolved', color: 'success' },
    { value: 'spam', label: 'Spam', color: 'error' }
  ]

  const fetchLeads = async () => {
    try {
      setLoading(true)
      const response = await fetch(`/api/contact?page=${currentPage}&status=${statusFilter}&limit=10`)
      
      if (!response.ok) {
        throw new Error('Failed to fetch leads')
      }

      const data = await response.json()
      setLeads(data.leads)
      setTotalPages(data.totalPages)
      setTotalLeads(data.total)
      setError('')
    } catch (error) {
      console.error('Error fetching leads:', error)
      setError('Failed to fetch contact leads')
    } finally {
      setLoading(false)
    }
  }

  useEffect(() => {
    fetchLeads()
  }, [currentPage, statusFilter])

  const handleViewLead = (lead) => {
    setSelectedLead(lead)
    setViewDialogOpen(true)
  }

  const handleEditLead = (lead) => {
    setSelectedLead({ ...lead })
    setEditDialogOpen(true)
  }

  const handleUpdateStatus = async (leadId, newStatus) => {
    try {
      const response = await fetch(`/api/contact/${leadId}`, {
        method: 'PATCH',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify({ status: newStatus })
      })

      if (response.ok) {
        setSuccess('Lead status updated successfully')
        setTimeout(() => setSuccess(''), 3000)
        fetchLeads()
      } else {
        setError('Failed to update lead status')
        setTimeout(() => setError(''), 3000)
      }
    } catch (error) {
      console.error('Error updating lead:', error)
      setError('Failed to update lead status')
      setTimeout(() => setError(''), 3000)
    }
  }

  const handleDeleteLead = async (leadId) => {
    if (!confirm('Are you sure you want to delete this lead?')) return

    try {
      const response = await fetch(`/api/contact/${leadId}`, {
        method: 'DELETE'
      })

      if (response.ok) {
        setSuccess('Lead deleted successfully')
        setTimeout(() => setSuccess(''), 3000)
        fetchLeads()
      } else {
        setError('Failed to delete lead')
        setTimeout(() => setError(''), 3000)
      }
    } catch (error) {
      console.error('Error deleting lead:', error)
      setError('Failed to delete lead')
      setTimeout(() => setError(''), 3000)
    }
  }

  const formatDate = (dateString) => {
    return new Date(dateString).toLocaleDateString('en-US', {
      year: 'numeric',
      month: 'short',
      day: 'numeric',
      hour: '2-digit',
      minute: '2-digit'
    })
  }

  const getStatusColor = (status) => {
    const statusOption = statusOptions.find(opt => opt.value === status)
    return statusOption ? statusOption.color : 'default'
  }

  const getStatusLabel = (status) => {
    const statusOption = statusOptions.find(opt => opt.value === status)
    return statusOption ? statusOption.label : status
  }

  // Stats calculation
  const stats = {
    total: totalLeads,
    new: leads.filter(lead => lead.status === 'new').length,
    contacted: leads.filter(lead => lead.status === 'contacted').length,
    resolved: leads.filter(lead => lead.status === 'resolved').length
  }

  return (
    <Box>
      {/* Stats Cards */}
      <Grid container spacing={3} sx={{ mb: 3 }}>
        <Grid item xs={12} sm={6} md={3}>
          <Card>
            <CardContent sx={{ textAlign: 'center' }}>
              <Typography variant="h4" color="primary" fontWeight="bold">
                {stats.total}
              </Typography>
              <Typography color="text.secondary">Total Leads</Typography>
            </CardContent>
          </Card>
        </Grid>
        <Grid item xs={12} sm={6} md={3}>
          <Card>
            <CardContent sx={{ textAlign: 'center' }}>
              <Typography variant="h4" color="info.main" fontWeight="bold">
                {stats.new}
              </Typography>
              <Typography color="text.secondary">New</Typography>
            </CardContent>
          </Card>
        </Grid>
        <Grid item xs={12} sm={6} md={3}>
          <Card>
            <CardContent sx={{ textAlign: 'center' }}>
              <Typography variant="h4" color="warning.main" fontWeight="bold">
                {stats.contacted}
              </Typography>
              <Typography color="text.secondary">Contacted</Typography>
            </CardContent>
          </Card>
        </Grid>
        <Grid item xs={12} sm={6} md={3}>
          <Card>
            <CardContent sx={{ textAlign: 'center' }}>
              <Typography variant="h4" color="success.main" fontWeight="bold">
                {stats.resolved}
              </Typography>
              <Typography color="text.secondary">Resolved</Typography>
            </CardContent>
          </Card>
        </Grid>
      </Grid>

      {/* Alerts */}
      {error && <Alert severity="error" sx={{ mb: 2 }}>{error}</Alert>}
      {success && <Alert severity="success" sx={{ mb: 2 }}>{success}</Alert>}

      {/* Controls */}
      <Box sx={{ display: 'flex', justifyContent: 'space-between', mb: 3, flexWrap: 'wrap', gap: 2 }}>
        <Box sx={{ display: 'flex', gap: 2, alignItems: 'center' }}>
          <FormControl size="small" sx={{ minWidth: 120 }}>
            <InputLabel>Status Filter</InputLabel>
            <Select
              value={statusFilter}
              label="Status Filter"
              onChange={(e) => {
                setStatusFilter(e.target.value)
                setCurrentPage(1)
              }}
            >
              {statusOptions.map(option => (
                <MenuItem key={option.value} value={option.value}>
                  {option.label}
                </MenuItem>
              ))}
            </Select>
          </FormControl>
        </Box>
        
        <Button
          variant="outlined"
          startIcon={<RefreshIcon />}
          onClick={fetchLeads}
          disabled={loading}
        >
          Refresh
        </Button>
      </Box>

      {/* Table */}
      <TableContainer component={Paper}>
        <Table>
          <TableHead>
            <TableRow>
              <TableCell>Name</TableCell>
              <TableCell>Email</TableCell>
              <TableCell>Phone</TableCell>
              <TableCell>Inquiry Type</TableCell>
              <TableCell>Status</TableCell>
              <TableCell>Date</TableCell>
              <TableCell>Actions</TableCell>
            </TableRow>
          </TableHead>
          <TableBody>
            {loading ? (
              <TableRow>
                <TableCell colSpan={7} align="center">
                  Loading...
                </TableCell>
              </TableRow>
            ) : leads.length === 0 ? (
              <TableRow>
                <TableCell colSpan={7} align="center">
                  No contact leads found
                </TableCell>
              </TableRow>
            ) : (
              leads.map((lead) => (
                <TableRow key={lead.id}>
                  <TableCell>{lead.name}</TableCell>
                  <TableCell>
                    <Box sx={{ display: 'flex', alignItems: 'center', gap: 1 }}>
                      {lead.email}
                      <IconButton size="small" href={`mailto:${lead.email}`}>
                        <EmailIcon fontSize="small" />
                      </IconButton>
                    </Box>
                  </TableCell>
                  <TableCell>
                    {lead.phone && (
                      <Box sx={{ display: 'flex', alignItems: 'center', gap: 1 }}>
                        {lead.phone}
                        <IconButton size="small" href={`tel:${lead.phone}`}>
                          <PhoneIcon fontSize="small" />
                        </IconButton>
                      </Box>
                    )}
                  </TableCell>
                  <TableCell>{lead.inquiry_type || 'N/A'}</TableCell>
                  <TableCell>
                    <FormControl size="small" sx={{ minWidth: 100 }}>
                      <Select
                        value={lead.status}
                        onChange={(e) => handleUpdateStatus(lead.id, e.target.value)}
                        size="small"
                      >
                        <MenuItem value="new">
                          <Chip label="New" color="primary" size="small" />
                        </MenuItem>
                        <MenuItem value="contacted">
                          <Chip label="Contacted" color="warning" size="small" />
                        </MenuItem>
                        <MenuItem value="resolved">
                          <Chip label="Resolved" color="success" size="small" />
                        </MenuItem>
                        <MenuItem value="spam">
                          <Chip label="Spam" color="error" size="small" />
                        </MenuItem>
                      </Select>
                    </FormControl>
                  </TableCell>
                  <TableCell>{formatDate(lead.created_at)}</TableCell>
                  <TableCell>
                    <Box sx={{ display: 'flex', gap: 1 }}>
                      <Tooltip title="View Details">
                        <IconButton size="small" onClick={() => handleViewLead(lead)}>
                          <ViewIcon />
                        </IconButton>
                      </Tooltip>
                      <Tooltip title="Delete">
                        <IconButton size="small" onClick={() => handleDeleteLead(lead.id)} color="error">
                          <DeleteIcon />
                        </IconButton>
                      </Tooltip>
                    </Box>
                  </TableCell>
                </TableRow>
              ))
            )}
          </TableBody>
        </Table>
      </TableContainer>

      {/* Pagination */}
      {totalPages > 1 && (
        <Box sx={{ display: 'flex', justifyContent: 'center', mt: 3 }}>
          <Pagination
            count={totalPages}
            page={currentPage}
            onChange={(e, page) => setCurrentPage(page)}
            color="primary"
          />
        </Box>
      )}

      {/* View Dialog */}
      <Dialog open={viewDialogOpen} onClose={() => setViewDialogOpen(false)} maxWidth="md" fullWidth>
        <DialogTitle>Contact Lead Details</DialogTitle>
        <DialogContent>
          {selectedLead && (
            <Grid container spacing={2}>
              <Grid item xs={12} sm={6}>
                <TextField
                  label="Name"
                  value={selectedLead.name}
                  fullWidth
                  disabled
                  margin="normal"
                />
              </Grid>
              <Grid item xs={12} sm={6}>
                <TextField
                  label="Email"
                  value={selectedLead.email}
                  fullWidth
                  disabled
                  margin="normal"
                />
              </Grid>
              <Grid item xs={12} sm={6}>
                <TextField
                  label="Phone"
                  value={selectedLead.phone || 'N/A'}
                  fullWidth
                  disabled
                  margin="normal"
                />
              </Grid>
              <Grid item xs={12} sm={6}>
                <TextField
                  label="Inquiry Type"
                  value={selectedLead.inquiry_type || 'N/A'}
                  fullWidth
                  disabled
                  margin="normal"
                />
              </Grid>
              <Grid item xs={12} sm={6}>
                <TextField
                  label="Status"
                  value={getStatusLabel(selectedLead.status)}
                  fullWidth
                  disabled
                  margin="normal"
                />
              </Grid>
              <Grid item xs={12} sm={6}>
                <TextField
                  label="Date Submitted"
                  value={formatDate(selectedLead.created_at)}
                  fullWidth
                  disabled
                  margin="normal"
                />
              </Grid>
              <Grid item xs={12}>
                <TextField
                  label="Message"
                  value={selectedLead.message}
                  fullWidth
                  disabled
                  multiline
                  rows={4}
                  margin="normal"
                />
              </Grid>
            </Grid>
          )}
        </DialogContent>
        <DialogActions>
          <Button onClick={() => setViewDialogOpen(false)}>Close</Button>
        </DialogActions>
      </Dialog>
    </Box>
  )
}

export default ContactLeadsManagement